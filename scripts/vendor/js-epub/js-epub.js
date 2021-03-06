(function (GLOBAL) {
    var JSEpub = function (blob) {
        this.blob = blob;
    }

    GLOBAL.JSEpub = JSEpub;

    JSEpub.prototype = {
        // For mockability
        unzipper: function (blob) {
            return new JSUnzip(blob);
        },
        inflate: function(blob) {
            return JSInflate.inflate(blob);
        },

        // None-blocking processing of the EPUB. The notifier callback will
        // get called with a number and a optional info parameter on various
        // steps of the processing:
        //
        //  1: Unzipping
        //  2: Uncompressing file. File name passed as 2nd argument.
        //  3: Reading OPF
        //  4: Post processing
        //  5: Finished!
        //
        // Error codes:
        //  -1: File is not a proper Zip file.
        processInSteps: function (notifier) {
            notifier(1);
            if (this.unzipBlob(notifier) === false) {
                return;
            }

            this.files = {};
            this.uncompressNextCompressedFile(notifier);
            // When all files are decompressed, uncompressNextCompressedFile
            // will continue with the next step.
        },

        unzipBlob: function (notifier) {
            var unzipper = this.unzipper(this.blob);
            if (!unzipper.isZipFile()) {
                notifier(-1);
                return false;
            }

            unzipper.readEntries();
            this.compressedFiles = unzipper.entries;
        },

        uncompressNextCompressedFile: function (notifier) {
            var self = this;
            var compressedFile = this.compressedFiles.shift();
            if (compressedFile) {
                if (this.isValidFile(compressedFile.fileName)) {
                    notifier(2, compressedFile.fileName);
                    this.uncompressFile(compressedFile);
                }
                this.withTimeout(this.uncompressNextCompressedFile, notifier);
            } else {
                this.didUncompressAllFiles(notifier);
            }
        },

        isValidFile: function(filename) {
            return (filename.match(/mimetype|\.(html|xml|htm|ncx|opf|xhtml)$/) != null);
        },

        // For mockability
        withTimeout: function (func, notifier) {
            var self = this;
            setTimeout(function () {
                func.call(self, notifier);
            }, 30);
        },

        didUncompressAllFiles: function (notifier) {
            notifier(3);
            this.opfPath = this.getOpfPathFromContainer();
            this.readOpf(this.files[this.opfPath]);
            this.readToC();

            notifier(4);

            this.postProcess();

            notifier(5);
        },

        uncompressFile: function (compressedFile) {
            var data;
            if (compressedFile.compressionMethod === 0) {
                data = compressedFile.data;
            } else if (compressedFile.compressionMethod === 8) {
                data = this.inflate(compressedFile.data);
            } else {
                throw new Error("Unknown compression method "
                                + compressedFile.compressionMethod
                                + " encountered.");
            }

            if (compressedFile.fileName === "META-INF/container.xml") {
                this.container = data;
            } else if (compressedFile.fileName === "mimetype") {
                this.mimetype = data;
            } else {
                this.files[compressedFile.fileName] = data;
            }
        },

        getOpfPathFromContainer: function () {
            var doc = this.xmlDocument(this.container);
            return doc
                .getElementsByTagName("rootfile")[0]
                .getAttribute("full-path");
        },

        readNcx: function(xml, tocPrefix) {
            function readInnerXml(node) {
                return (new XMLSerializer()).serializeToString(node);
            }
            function readNavPoint(navPoint) {
                var items = navPoint.childNodes;
                var target = null;
                var label = null;
                for (var i = 0; i < items.length; i++) {
                    if (items[i].tagName == 'content') {
                        target = items[i].getAttribute('src');
                    }
                    else if (items[i].tagName == 'navLabel') {
                        label = />(.+)</.exec(readInnerXml(items[i].
                            getElementsByTagName('text')[0]))[1];
                    }
                }

                var tocItem = null;
                if (target && label) {
                    tocItem = {
                        src: tocPrefix + target,
                        title: label
                    };
                }

                return tocItem;
            }

            var doc = this.xmlDocument(xml);
            var ns = doc.getElementsByTagName('ncx')[0].getAttribute('xmlns');
            var x = doc.getElementsByTagNameNS(ns, 'navMap')[0];
            var items = x.childNodes;

            var toc = [];

            for (var i = 0; i < items.length; i++) {
                if (items[i].tagName == 'navPoint') {
                    var tocItem = readNavPoint(items[i]);
                    if (tocItem) toc.push(tocItem);
                }
            }

            return toc;
        },

        readOpf: function (xml) {
            var doc = this.xmlDocument(xml);
            var opf = {
                metadata: {},
                manifest: {},
                spine: []
            };

            var metadataNodes = doc
                .getElementsByTagName("metadata")[0]
                .childNodes;

            for (var i = 0, il = metadataNodes.length; i < il; i++) {
                var node = metadataNodes[i];
                // Skip text nodes (whitespace)
                if (node.nodeType === 3) { continue }

                var attrs = {};
                for (var i2 = 0, il2 = node.attributes.length; i2 < il2; i2++) {
                    var attr = node.attributes[i2];
                    attrs[attr.name] = attr.value;
                }
                attrs._text = node.textContent;
                opf.metadata[node.nodeName] = attrs;
            }

            var manifestEntries = doc
                .getElementsByTagName("manifest")[0]
                .getElementsByTagName("item");

            for (var i = 0, il = manifestEntries.length; i < il; i++) {
                var node = manifestEntries[i];

                opf.manifest[node.getAttribute("id")] = {
                    "href": this.resolvePath(node.getAttribute("href"), this.opfPath),
                    "media-type": node.getAttribute("media-type")
                }
            }

            var spineEntries = doc
                .getElementsByTagName("spine")[0]
                .getElementsByTagName("itemref");

            for (var i = 0, il = spineEntries.length; i < il; i++) {
                var node = spineEntries[i];
                opf.spine.push(node.getAttribute("idref"));
            }

            this.opf = opf;
        },

        resolvePath: function (path, referrerLocation) {
            var pathDirs = path.split("/");
            var fileName = pathDirs.pop();

            var locationDirs = referrerLocation.split("/");
            locationDirs.pop();

            for (var i = 0, il = pathDirs.length; i < il; i++) {
                var spec = pathDirs[i];
                if (spec === "..") {
                    locationDirs.pop();
                } else {
                    locationDirs.push(spec);
                }
            }

            locationDirs.push(fileName);
            return locationDirs.join("/");
        },

        findMediaTypeByHref: function (href) {
            for (key in this.opf.manifest) {
                var item = this.opf.manifest[key];
                if (item["href"] === href) {
                    return item["media-type"];
                }
            }

            // Best guess if it's not in the manifest. (Those bastards.)
            var match = href.match(/\.(\w+)$/);
            return match && "image/" + match[1];
        },

        // Will modify all HTML and CSS files in place.
        postProcess: function () {
            for (var key in this.opf.manifest) {
                var mediaType = this.opf.manifest[key]["media-type"]
                var href = this.opf.manifest[key]["href"]
                var result;

                if (mediaType === "text/css") {
                    // result = this.postProcessCSS(href);
                } else if (mediaType === "application/xhtml+xml" &&
                href.match(/\.(htm|html|xhtml)$/)) {
                    result = this.postProcessHTML(href);
                }

                if (result !== undefined) {
                    this.files[href] = result;
                }
            }
        },

        postProcessCSS: function (href) {
            var file = this.files[href];
            var self = this;

            file = file.replace(/url\((.*?)\)/gi, function (str, url) {
                if (/^data/i.test(url)) {
                    // Don't replace data strings
                    return str;
                } else {
                    var dataUri = self.getDataUri(url, href);
                    return "url(" + dataUri + ")";
                }
            });

            return file;
        },

        readToC: function() {
            var tocFilename = null;
            var tocPrefix = null;
            for (key in this.opf.manifest) {
                var resource = this.opf.manifest[key];
                var matches = /(.*\/)?.+\.ncx$/.exec(resource.href);
                if (matches) {
                    tocPrefix = matches[1];
                    tocFilename = resource.href;
                    break;
                }
            }

            if (tocFilename) {
                try {
                    var toc = this.readNcx(this.files[tocFilename],
                        tocPrefix);
                }
                catch (e) {
                    var toc = [];
                }
                this.opf.toc = toc;
            }
        },

        postProcessHTML: function (href) {
            console.log('postprocessing ' + href);
            var xml = decodeURIComponent(escape(this.files[href]));
            var doc = this.xmlDocument(html.sanitize(xml), "text/html");

            // TODO: temp thing
            var replaceImage = function(image) {
                console.log('replacing ' + image.getAttribute('alt'));
                var alt = image.getAttribute('alt');

                if (alt) {
                    var span = document.createElement('span');
                    span.setAttribute('class', 'image-alt');
                    span.innerHTML = alt;
                    image.parentNode.insertBefore(span, image);
                }
                image.parentNode.removeChild(image);
            };
            var images = Array.prototype.slice.call(doc.getElementsByTagName("img"));
            for (var i = 0; i < images.length; i++) {
                replaceImage(images[i]);
            }

            // ----------------

            // var images = doc.getElementsByTagName("img");
            // for (var i = 0, il = images.length; i < il; i++) {
            //     var image = images[i];
            //     var src = image.getAttribute("src");
            //     if (/^data/.test(src)) { continue }
            //     image.setAttribute("src", this.getDataUri(src, href))
            // }
            //
            // var head = doc.getElementsByTagName("head")[0];
            // var links = head.getElementsByTagName("link");
            // for (var i = 0, il = links.length; i < il; i++) {
            //     var link = links[0];
            //     if (link.getAttribute("type") === "text/css") {
            //         var inlineStyle = document.createElement("style");
            //         inlineStyle.setAttribute("type", "text/css");
            //         inlineStyle.setAttribute("data-orig-href", link.getAttribute("href"));
            //
            //         var css = this.files[this.resolvePath(link.getAttribute("href"), href)];
            //         inlineStyle.appendChild(document.createTextNode(css));
            //
            //         head.replaceChild(inlineStyle, link);
            //     }
            // }

            return doc;
        },

        getDataUri: function (url, href) {
            var dataHref = this.resolvePath(url, href);
            var mediaType = this.findMediaTypeByHref(dataHref);
            var encodedData = escape(this.files[dataHref]);
            return "data:" + mediaType + "," + encodedData;
        },

        validate: function () {
            if (this.container === undefined) {
                throw new Error("META-INF/container.xml file not found.");
            }

            if (this.mimetype === undefined) {
                throw new Error("Mimetype file not found.");
            }

            if (this.mimetype !== "application/epub+zip") {
                throw new Error("Incorrect mimetype " + this.mimetype);
            }
        },

        // for data URIs
        escapeData: function (data) {
            return escape(data);
        },

        xmlDocument: function (xml, mimetype) {
            var doc = new DOMParser().parseFromString(xml, mimetype || 'text/xml');

            if (doc.childNodes[1] && doc.childNodes[1].nodeName === "parsererror") {
                throw doc.childNodes[1].childNodes[0].nodeValue;
            }
            return doc;
        }
    }
}(this));