const bookLists = [
    {
        bookName: 'Queenie', 
        author: 'Candice Carty-Williams', 
        price: 7.99,
        description: `THE SUNDAY TIMES BESTSELLER SHORTLISTED FOR THE COSTA FIRST NOVEL
        AWARD LONGLISTED FOR THE WOMEN'S PRIZE FOR FICTION. 'Hilarious, compelling, painful,
        enlightening, honest. I loved it (Dolly Alderton) Brilliant, timely, funny, heartbreaking. 
        (Jojo Moyes) A deliciously funny, characterful, topical ...`, 
        

    }, 
    {  
        bookName: 'Ghana Must Go',
        author: 'Taiye Selasi', 
        price: 2.99,
        description: 'A stunning novel, spanning generations and continents, Ghana Must Go by rising star Taiye Selasi is a tale of family drama and forgiveness, for fans of Zadie Smith and Chimamanda Ngozi Adichie. This is the story of a family - of the simple,devastating ways in which families tear themselves apart', 
        

    },

    {
        bookName:'The Girl Who Smiled Beads',
        author: 'Clemantine Wamariya, Elizabeth Weil',
        price: 3.99, 
        description: `When Clemantine Wamariya was six years old, her world was torn apart. She didn't know why her parents began talking in whispers, or why her neighbours started disappearing, or why she could hear distant thunder even when the skies were clear. As the Rwandan civil war raged, Clemantine and her sister...`, 
        

    },
    
    {
        bookName: 'Americanah', 
        author: 'Chimamanda Ngozi Adichie', 
        price: 3.49,
        description: `SHORTLISTED FOR THE BAILEY’S WOMEN’S PRIZE FOR FICTION. A delicious,important novel</q> (The Times) <q>Alert, alive and gripping</q> (The Independent) <q>Some novels tell a great story and others make you change the way you look at the world.
        Americanah does both (Guardian)`, 
        
    }, 

    {
        bookName: 'What We Lose', 
        author: 'Zinzi Clemmons', 
        price: 2.99, 
        description: `A short, intense and profoundly moving novel about race, identity, family, sex, country, and death, from one of the National Book Foundation’s 5 Under 35. An author of rare, haunting power this is a stunning debut about a young African-American woman coming of age. Raised in Pennsylvania, Thandi views the world of her mother’s childhood in Johannesburg as both impossibly distant and ever present. She is an outsider wherever she goes, caught between being black and white`,  
   
    }, 

    {
        bookName: 'The Good Lord Bird', 
        author: 'James McBride', 
        price: 8.38, 
        description: `Soon to be a Showtime limited series starring Ethan Hawke Winner of the National Book Award for Fiction A Washington Post, Publishers Weekly, Oprah Magazine Top 10 Book of the Year From the bestselling author of The Color of Water, Song Yet Sung, Five-Carat Soul, and Kill 'Em and Leave, a James Brow.`, 
    
    }, 

    {
        bookName: 'Ordinary Light', 
        author: 'John S. Green', 
        price: 3.83, 
        description: 'Real, raw, and funny, the voice of John S. Green takes you on a lifelong journey of seeking sacred resting places in the middle of lifes ever increasing chaos and distractions. Headlines scream, Beware! Look out! The end is near! A lightning, flashing, neon pulse that blinds us from the ordinary light.', 
    
    }, 

    {
        bookName: 'The Water Dancer', 
        author: 'Ta-Nehisi Coates', 
        price: 6.99, 
        description: `The unmissable debut novel by the critically acclaimed author of Between the World and Me and We Were Eight Years in Power - a richly imagined and compulsively page-turning journey to freedom. OPRAH BOOK CLUB PICK 
        'I haven't felt this way since I first read Beloved... I wish Toni [Morrison] was alive ...`, 

    }, 

    {
        bookName: 'Known and Strange Things', 
        author: 'Teju Cole', 
        price: 5.03, 
        description: `A blazingly intelligent first collection of essays from the award-winning author of Open City and Every Day Is for the Thief. With these pieces on
        politics, photography, travel, history and literature - many of which have become viral sensations, shared and debated around the globe - Teju Cole solid.`, 

    }, 

    {
        bookName: 'Black Is the Body', 
        author: 'Emily Bernard', 
        price: 3.63, 
        description: `An extraordinary, exquisitely written memoir (of sorts) that looks at race--in a fearless, penetrating, honest, true way--in twelve telltale, connected,
        deeply personal essays that explore, up-close, the complexities and paradoxes, the haunting memories and ambushing realities of growing up black in.`, 

    }, 

    {
        bookName: `It's Trevor Noah: Born a Crime`, 
        author: 'Trevor Noah', 
        price: 3.99, 
        description: `The host of The Daily Show, Trevor Noah, tells the story of growing up mixed race in South Africa under and after apartheid in this young readers'
        adaptation of his bestselling adult memoir Born a Crime: Stories from a South African Childhood.`, 

    }, 

    {  
        bookName: 'Zone One', 
        author: 'Colson Whitehead', 
        price: 4.99, 
        description: `From the author of the Man Booker longlisted The Underground Railroad A pandemic has devastated the planet, sorting humanity into two types: the uninfected
        and the infected, the living and the living dead. The worst of the plague is now past,and Manhattan is slowly being resettled. Armed forces hav...`, 

    }, 

    { 
        bookName: 'We Cast a Shadow', 
        author: 'Maurice Carlos Ruffin', 
        price: 4.05, 
        description: `An incisive and necessary (Roxane Gay) debut for fans of Get Out and Paul Beatty’s The Sellout, about a father’s obsessive quest to protect his son—even
        if it means turning him white Longlisted for the Center for Fiction First Novel Prize. “Stunning and audacious . . . at once a pitch-black comed...`, 
       

    }, 

    {
        bookName: 'Black Leopard, Red Wolf', 
        author: 'Marlon James', 
        price: 4.99, 
        description: `The Sunday Times Number 1 Bestseller and A New York Times Bestseller. 'Black Leopard, Red Wolf is the kind of novel I never realized I was missing until I
        read it. A dangerous, hallucinatory, ancient Africa, which becomes a fantasy world as well-realized as anything Tolkien made, with language as PeriodicWaveConstraints.`, 
        
    }, 

    {
        bookName: 'More Than Enough', 
        author: 'Elaine Welteroth', 
        price: 4.99, 
        description: `In this part-manifesto, part-memoir, the revolutionary editor who infused social consciousness into the pages of Teen Vogue explores what it means to come into your own – on your own terms. 
        Elaine Welteroth has climbed the ranks of media and fashion, shattering ceilings along the way. In this riveti...`, 
        
    }, 

    {
        bookName: 'How Beautiful We Were', 
        author: 'Imbolo Mbue', 
        price: 6.99, 
        description: `A formidable storyteller (Jonathan Franzen) Set in the fictional African village of Kosawa, How Beautiful We Were tells the story of a people living in
        fear amidst environmental degradation wrought by an American oil company. Pipeline spills have rendered farmlands infertile. Children are dying from.`, 
       
    }, 

    {
        bookName: 'Behold the Dreamers', 
        author: 'Imbolo Mbue', 
        price: 3.99, 
        description:`NEW YORK TIMES BOOK OF THE YEAR AN OBSERVER BOOK OF THE YEAR OPRAH BOOK CLUB PICK. A powerful and timely story of marriage, class, race and the pursuit of
        the American Dream. Behold the Dreamers is a dazzling debut novel about life, liberty and the pursuit of happiness – and of what we’re prepared .`, 
       
    }, 

    {
        bookName: 'What Is Not Yours Is Not Yours', 
        author: 'Helen Oyeyemi', 
        price: 6.99, 
        description: `The stories collected in What Is Not Yours Is Not Yours are linked by more than the exquisitely winding prose of their creator: Helen Oyeyemi's ensemble cast
        of characters slip from the pages of their own stories only to surface in another. The reader is invited into a world of lost libraries and lo...`, 
       
    }, 

    {
        bookName: 'Homegoing', 
        author: 'Yaa Gyasi', 
        price: 3.99, 
        description: `THE SUNDAY TIMES BESTSELLER. Selected for Granta's Best of Young American Novelists 2017 Winner of the National Book Critics Circle Award for Best First
        Book Shortlisted for the PEN/Robert W. Bingham Prize for Debut Fiction Effia and Esi: two sisters with two very different destinies. One sold into s...`, 
   
    }, 

    {
        bookName: 'Red at the Bone', 
        author: 'Jacqueline Woodson', 
        price: 7.99, 
        description: `THE TOP 10 NEW YORK TIMES BESTSELLER LONGLISTED FOR THE WOMEN'S PRIZE 2020. Will remind you why you love reading (Stylist, Best New Books for 2020)
        Sublime... will strike you in the heart(Candice Carty-Williams, author of Queenie) Profound, moving and consistently unexpected... Pure poetry.`, 
 
    }, 

    {
        bookName: 'I Almost Forgot About You', 
        author: 'Terry McMillan', 
        price: 7.05, 
        description: `NEW YORK TIMES BESTSELLER. The bestselling author of How Stella Got Her Groove Back and Waiting To Exhale is back with the inspiring story of a woman who
        shakes things up in her life to find greater meaning. NAMED ONE OF THE BEST BOOKS OF THE YEAR BY LIBRARY JOURNAL</b> In I Almost Forgot About You, Dr....`, 

    }, 

    {
        bookName: 'The Girl with the Louding Voice', 
        author: 'Abi Daré', 
        price: 4.99, 
        description: `All you have are your words. AS RECOMMENDED BY MALALA YOUSAFZAI AN INSTANT NEW YORK TIMES BESTSELLER A STYLIST BEST BOOK OF 2020. A stunning novel -
        original, beautiful and powerful (Rosamund Lupton) Meet Adunni, a teenage girl born into a rural Nigerian village. Aged fourteen, she is a commodity, a ...`, 
        

    }, 

    {
        bookName: 'Well-Read Black Girl', 
        author: 'Glory Edim', 
        price: 3.99, 
        description: `Required reading (Cosmopolitan) This should be read as a sacred text. Here, you will bear witness to a perpetual salvation song.</q> (Jason Reynolds)
        Remember that moment when you first encountered a character who seemed to be written just for you? That feeling of belonging remains with readers the...`, 
      
    }, 

    {
        bookName: 'Such a Fun Age', 
        author: 'Kiley Reid', 
        price: 9.09, 
        description: `A new literary star (The Times) A Reese Witherspoon Book Club Pick // A Zoella Book Club Pick // A Times, Stylist, Elle, Glamour and BBC Best Book of 2020
        When Emira is apprehended at a supermarket for 'kidnapping' the white child she's actually babysitting, it sets off an explosive chain of events. `, 
    }, 

    {
        bookName: 'Goldilocks and the Three Bears', 
        author: 'Calee M. Lee', 
        price: 9.64, 
        description: `Someone has been eating my porridge! The classic fairy tale of Goldilocks and the Three Bears has been retold with a modern hipster spin. Rhythmic
        sentences for beginning readers, perfect for the touchscreen generation...`, 
       
    },
]


//function displayBooks () {}

