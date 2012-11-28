define(['book_data', 'book'], function(BookData, Book) {

  function Preinstaller(container) {
	var front = "<h1 style=\"margin:0px\" xmlns=\"http://www.w3.org/1999/xhtml\" class=\"c1\" id=\"pgepubid00000\">Frankenstein,</h1><h2 xmlns=\"http://www.w3.org/1999/xhtml\" class=\"c2\" id=\"pgepubid00001\" style=\"margin: 0px\">or the Modern Prometheus</h2><h3 style=\"margin:0px\"  xmlns=\"http://www.w3.org/1999/xhtml\" class=\"c3\" id=\"pgepubid00002\">by</h3> <h2 xmlns=\"http://www.w3.org/1999/xhtml\" class=\"c2\" id=\"pgepubid00003\">Mary Shelley</h2> <p xmlns=\"http://www.w3.org/1999/xhtml\"><br/> <br/> <br/></p><p xmlns=\"http://www.w3.org/1999/xhtml\">";
	var chap0 = "<a id=\"letter1\"/></p> <h3 xmlns=\"http://www.w3.org/1999/xhtml\" class=\"c3\" id=\"pgepubid00005\">Letter 1</h3> <p xmlns=\"http://www.w3.org/1999/xhtml\" class=\"noindent\">St. Petersburgh, Dec. 11th, 17—<br/> <br/> TO Mrs. Saville, England</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight. Do you understand this feeling? This breeze, which has travelled from the regions towards which I am advancing, gives me a foretaste of those icy climes. Inspirited by this wind of promise, my daydreams become more fervent and vivid. I try in vain to be persuaded that the pole is the seat of frost and desolation; it ever presents itself to my imagination as the region of beauty and delight. There, Margaret, the sun is forever visible, its broad disk just skirting the horizon and diffusing a perpetual splendour. There—for with your leave, my sister, I will put some trust in preceding navigators—there snow and frost are banished; and, sailing over a calm sea, we may be wafted to a land surpassing in wonders and in beauty every region hitherto discovered on the habitable globe. Its productions and features may be without example, as the phenomena of the heavenly bodies undoubtedly are in those undiscovered solitudes. What may not be expected in a country of eternal light? I may there discover the wondrous power which attracts the needle and may regulate a thousand celestial observations that require only this voyage to render their seeming eccentricities consistent forever. I shall satiate my ardent curiosity with the sight of a part of the world never before visited, and may tread a land never before imprinted by the foot of man. These are my enticements, and they are sufficient to conquer all fear of danger or death and to induce me to commence this laborious voyage with the joy a child feels when he embarks in a little boat, with his holiday mates, on an expedition of discovery up his native river. But supposing all these conjectures to be false, you cannot contest the inestimable benefit which I shall confer on all mankind, to the last generation, by discovering a passage near the pole to those countries, to reach which at present so many months are requisite; or by ascertaining the secret of the magnet, which, if at all possible, can only be effected by an undertaking such as mine.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">These reflections have dispelled the agitation with which I began my letter, and I feel my heart glow with an enthusiasm which elevates me to heaven, for nothing contributes so much to tranquillize the mind as a steady purpose—a point on which the soul may fix its intellectual eye. This expedition has been the favourite dream of my early years. I have read with ardour the accounts of the various voyages which have been made in the prospect of arriving at the North Pacific Ocean through the seas which surround the pole. You may remember that a history of all the voyages made for purposes of discovery composed the whole of our good Uncle Thomas' library. My education was neglected, yet I was passionately fond of reading. These volumes were my study day and night, and my familiarity with them increased that regret which I had felt, as a child, on learning that my father's dying injunction had forbidden my uncle to allow me to embark in a seafaring life.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">These visions faded when I perused, for the first time, those poets whose effusions entranced my soul and lifted it to heaven. I also became a poet and for one year lived in a paradise of my own creation; I imagined that I also might obtain a niche in the temple where the names of Homer and Shakespeare are consecrated. You are well acquainted with my failure and how heavily I bore the disappointment. But just at that time I inherited the fortune of my cousin, and my thoughts were turned into the channel of their earlier bent.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">Six years have passed since I resolved on my present undertaking. I can, even now, remember the hour from which I dedicated myself to this great enterprise. I commenced by inuring my body to hardship. I accompanied the whale-fishers on several expeditions to the North Sea; I voluntarily endured cold, famine, thirst, and want of sleep; I often worked harder than the common sailors during the day and devoted my nights to the study of mathematics, the theory of medicine, and those branches of physical science from which a naval adventurer might derive the greatest practical advantage. Twice I actually hired myself as an under-mate in a Greenland whaler, and acquitted myself to admiration. I must own I felt a little proud when my captain offered me the second dignity in the vessel and entreated me to remain with the greatest earnestness, so valuable did he consider my services. And now, dear Margaret, do I not deserve to accomplish some great purpose? My life might have been passed in ease and luxury, but I preferred glory to every enticement that wealth placed in my path. Oh, that some encouraging voice would answer in the affirmative! My courage and my resolution is firm; but my hopes fluctuate, and my spirits are often depressed. I am about to proceed on a long and difficult voyage, the emergencies of which will demand all my fortitude: I am required not only to raise the spirits of others, but sometimes to sustain my own, when theirs are failing.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">This is the most favourable period for travelling in Russia. They fly quickly over the snow in their sledges; the motion is pleasant, and, in my opinion, far more agreeable than that of an English stagecoach. The cold is not excessive, if you are wrapped in furs—a dress which I have already adopted, for there is a great difference between walking the deck and remaining seated motionless for hours, when no exercise prevents the blood from actually freezing in your veins. I have no ambition to lose my life on the post-road between St. Petersburgh and Archangel. I shall depart for the latter town in a fortnight or three weeks; and my intention is to hire a ship there, which can easily be done by paying the insurance for the owner, and to engage as many sailors as I think necessary among those who are accustomed to the whale-fishing. I do not intend to sail until the month of June; and when shall I return? Ah, dear sister, how can I answer this question? If I succeed, many, many months, perhaps years, will pass before you and I may meet. If I fail, you will see me again soon, or never. Farewell, my dear, excellent Margaret. Heaven shower down blessings on you, and save me, that I may again and again testify my gratitude for all your love and kindness.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\" class=\"noindent\">Your affectionate brother,     R. Walton<br/></p> <p xmlns=\"http://www.w3.org/1999/xhtml\">";
	var chap1 = "<a id=\"letter2\"/></p> <h3 xmlns=\"http://www.w3.org/1999/xhtml\" class=\"c3\" id=\"pgepubid00006\">Letter 2</h3> <p xmlns=\"http://www.w3.org/1999/xhtml\"><br/></p> <p xmlns=\"http://www.w3.org/1999/xhtml\" class=\"noindent\">Archangel, 28th March, 17—<br/> <br/> To Mrs. Saville, England</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">How slowly the time passes here, encompassed as I am by frost and snow! Yet a second step is taken towards my enterprise. I have hired a vessel and am occupied in collecting my sailors; those whom I have already engaged appear to be men on whom I can depend and are certainly possessed of dauntless courage.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">But I have one want which I have never yet been able to satisfy, and the absence of the object of which I now feel as a most severe evil, I have no friend, Margaret: when I am glowing with the enthusiasm of success, there will be none to participate my joy; if I am assailed by disappointment, no one will endeavour to sustain me in dejection. I shall commit my thoughts to paper, it is true; but that is a poor medium for the communication of feeling. I desire the company of a man who could sympathize with me, whose eyes would reply to mine. You may deem me romantic, my dear sister, but I bitterly feel the want of a friend. I have no one near me, gentle yet courageous, possessed of a cultivated as well as of a capacious mind, whose tastes are like my own, to approve or amend my plans. How would such a friend repair the faults of your poor brother! I am too ardent in execution and too impatient of difficulties. But it is a still greater evil to me that I am self-educated: for the first fourteen years of my life I ran wild on a common and read nothing but our Uncle Thomas' books of voyages. At that age I became acquainted with the celebrated poets of our own country; but it was only when it had ceased to be in my power to derive its most important benefits from such a conviction that I perceived the necessity of becoming acquainted with more languages than that of my native country. Now I am twenty-eight and am in reality more illiterate than many schoolboys of fifteen. It is true that I have thought more and that my daydreams are more extended and magnificent, but they want (as the painters call it) KEEPING; and I greatly need a friend who would have sense enough not to despise me as romantic, and affection enough for me to endeavour to regulate my mind. Well, these are useless complaints; I shall certainly find no friend on the wide ocean, nor even here in Archangel, among merchants and seamen. Yet some feelings, unallied to the dross of human nature, beat even in these rugged bosoms. My lieutenant, for instance, is a man of wonderful courage and enterprise; he is madly desirous of glory, or rather, to word my phrase more characteristically, of advancement in his profession. He is an Englishman, and in the midst of national and professional prejudices, unsoftened by cultivation, retains some of the noblest endowments of humanity. I first became acquainted with him on board a whale vessel; finding that he was unemployed in this city, I easily engaged him to assist in my enterprise. The master is a person of an excellent disposition and is remarkable in the ship for his gentleness and the mildness of his discipline. This circumstance, added to his well-known integrity and dauntless courage, made me very desirous to engage him. A youth passed in solitude, my best years spent under your gentle and feminine fosterage, has so refined the groundwork of my character that I cannot overcome an intense distaste to the usual brutality exercised on board ship: I have never believed it to be necessary, and when I heard of a mariner equally noted for his kindliness of heart and the respect and obedience paid to him by his crew, I felt myself peculiarly fortunate in being able to secure his services. I heard of him first in rather a romantic manner, from a lady who owes to him the happiness of her life. This, briefly, is his story. Some years ago he loved a young Russian lady of moderate fortune, and having amassed a considerable sum in prize-money, the father of the girl consented to the match. He saw his mistress once before the destined ceremony; but she was bathed in tears, and throwing herself at his feet, entreated him to spare her, confessing at the same time that she loved another, but that he was poor, and that her father would never consent to the union. My generous friend reassured the suppliant, and on being informed of the name of her lover, instantly abandoned his pursuit. He had already bought a farm with his money, on which he had designed to pass the remainder of his life; but he bestowed the whole on his rival, together with the remains of his prize-money to purchase stock, and then himself solicited the young woman's father to consent to her marriage with her lover. But the old man decidedly refused, thinking himself bound in honour to my friend, who, when he found the father inexorable, quitted his country, nor returned until he heard that his former mistress was married according to her inclinations. \"What a noble fellow!\" you will exclaim. He is so; but then he is wholly uneducated: he is as silent as a Turk, and a kind of ignorant carelessness attends him, which, while it renders his conduct the more astonishing, detracts from the interest and sympathy which otherwise he would command.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">Yet do not suppose, because I complain a little or because I can conceive a consolation for my toils which I may never know, that I am wavering in my resolutions. Those are as fixed as fate, and my voyage is only now delayed until the weather shall permit my embarkation. The winter has been dreadfully severe, but the spring promises well, and it is considered as a remarkably early season, so that perhaps I may sail sooner than I expected. I shall do nothing rashly: you know me sufficiently to confide in my prudence and considerateness whenever the safety of others is committed to my care.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">I cannot describe to you my sensations on the near prospect of my undertaking. It is impossible to communicate to you a conception of the trembling sensation, half pleasurable and half fearful, with which I am preparing to depart. I am going to unexplored regions, to \"the land of mist and snow,\" but I shall kill no albatross; therefore do not be alarmed for my safety or if I should come back to you as worn and woeful as the \"Ancient Mariner.\" You will smile at my allusion, but I will disclose a secret. I have often attributed my attachment to, my passionate enthusiasm for, the dangerous mysteries of ocean to that production of the most imaginative of modern poets. There is something at work in my soul which I do not understand. I am practically industrious—painstaking, a workman to execute with perseverance and labour—but besides this there is a love for the marvellous, a belief in the marvellous, intertwined in all my projects, which hurries me out of the common pathways of men, even to the wild sea and unvisited regions I am about to explore. But to return to dearer considerations. Shall I meet you again, after having traversed immense seas, and returned by the most southern cape of Africa or America? I dare not expect such success, yet I cannot bear to look on the reverse of the picture. Continue for the present to write to me by every opportunity: I may receive your letters on some occasions when I need them most to support my spirits. I love you very tenderly. Remember me with affection, should you never hear from me again.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\" class=\"noindent\">Your affectionate brother, Robert Walton<br/></p> <p xmlns=\"http://www.w3.org/1999/xhtml\">";
	var chap2 = "<a id=\"letter3\"/></p> <h3 xmlns=\"http://www.w3.org/1999/xhtml\" class=\"c3\" id=\"pgepubid00007\">Letter 3</h3> <p xmlns=\"http://www.w3.org/1999/xhtml\"><br/></p> <p xmlns=\"http://www.w3.org/1999/xhtml\" class=\"noindent\">July 7th, 17—<br/> <br/> To Mrs. Saville, England</p> <p xmlns=\"http://www.w3.org/1999/xhtml\" class=\"noindent\">My dear Sister,</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">I write a few lines in haste to say that I am safe—and well advanced on my voyage. This letter will reach England by a merchantman now on its homeward voyage from Archangel; more fortunate than I, who may not see my native land, perhaps, for many years. I am, however, in good spirits: my men are bold and apparently firm of purpose, nor do the floating sheets of ice that continually pass us, indicating the dangers of the region towards which we are advancing, appear to dismay them. We have already reached a very high latitude; but it is the height of summer, and although not so warm as in England, the southern gales, which blow us speedily towards those shores which I so ardently desire to attain, breathe a degree of renovating warmth which I had not expected.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">No incidents have hitherto befallen us that would make a figure in a letter. One or two stiff gales and the springing of a leak are accidents which experienced navigators scarcely remember to record, and I shall be well content if nothing worse happen to us during our voyage.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">Adieu, my dear Margaret. Be assured that for my own sake, as well as yours, I will not rashly encounter danger. I will be cool, persevering, and prudent.</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">But success SHALL crown my endeavours. Wherefore not? Thus far I have gone, tracing a secure way over the pathless seas, the very stars themselves being witnesses and testimonies of my triumph. Why not still proceed over the untamed yet obedient element? What can stop the determined heart and resolved will of man?</p> <p xmlns=\"http://www.w3.org/1999/xhtml\">My swelling heart involuntarily pours itself out thus. But I must finish. Heaven bless my beloved sister!</p> <p xmlns=\"http://www.w3.org/1999/xhtml\" class=\"noindent\">R.W.</p>";

    this.bookData = new BookData();
    this.bookData.metadata = {
      title: "Frankenstein",
      creator: "Mary Shelley"
    };

    this.bookData.components = {
      front0: front,
      chap0: chap0,
      chap1: chap1,
      chap2: chap2
    };

    this.bookData.toc = [
        {title: 'Cover', src: 'front0'},
        {title: 'Letter 1', src: 'chap0'},
        {title: 'Letter 2', src: 'chap1'},
        {title: 'Letter 3', src: 'chap2'}
    ];

    this._container = container;
    this._loadingContainer = this._container.
        getElementsByClassName('loading')[0];
    this._progressBar = this._container.getElementsByTagName('progress')[0];
  }

  Preinstaller.prototype.load = function() {
    this._progressBar.value = 0;
    this._loadingContainer.style.display = 'block';

    var book = new Book({bookData:this.bookData});

    this._progressBar.value = 100;
    this._loadingContainer.style.display = 'none';

    document.dispatchEvent(new CustomEvent('bookimported', {
      detail: book
    }));
  };

  return Preinstaller;
});

