function getQuestions(){
    let questions = [
        {
            question: 'What year was the very first iPhone released?', 
            answers: [
                {ans: '2007', correct: true},
                {ans: '2008', correct: false},
                {ans: '2006', correct: false},
                {ans: '2009', correct: false}
        ]},

        {
            question: 'What was Twitter\'s original name?', 
            answers: [
                {ans: 'twttr', correct: true},
                {ans: 'tweeter', correct: false},
                {ans: 'flutter', correct: false},
                {ans: 'twtr', correct: false}
        ]},

        {
            question: 'What was the highest-grossing film of the four films listed?', 
            answers: [
                {ans: 'Frozen II', correct: true},
                {ans: 'The Lion King', correct: false},
                {ans: 'Zootopia', correct: false},
                {ans: 'Moana', correct: false}
        ]},
    
        {
            question: 'Who was the first Prime Minister of Canada?', 
            answers: [
                {ans: 'Sir John A. Macdonald', correct: true},
                {ans: 'Alexander Mackenzie', correct: false},
                {ans: 'John Abbott', correct: false},
                {ans: 'Justin Trudeau', correct: false}
        ]},
    
        {
            question: 'What is the chemical symbol for Gold?', 
            answers: [
                {ans: 'Au', correct: true},
                {ans: 'Ag', correct: false},
                {ans: 'G', correct: false},
                {ans: 'Go', correct: false}
        ]},
    
        {
            question: 'How many planets are in our Solar System?', 
            answers: [
                {ans: '8', correct: true},
                {ans: '9', correct: false},
                {ans: '7', correct: false},
                {ans: '10', correct: false}
        ]},
    
        {
            question: 'When was JavaScript released?', 
            answers: [
                {ans: '1995', correct: true},
                {ans: '1992', correct: false},
                {ans: '2000', correct: false},
                {ans: '1997', correct: false}
        ]},
    
        {
            question: 'What is the highest-grossing film of all time?', 
            answers: [
                {ans: 'Avatar (2009)', correct: true},
                {ans: 'Avengers: EndGame (2019)', correct: false},
                {ans: 'Titanic (1997)', correct: false},
                {ans: 'Star Wars: Episode VII - The Force Awakens (2015)', correct: false}
        ]},

        {
            question: 'What is the most streamed song on Spotify?', 
            answers: [
                {ans: 'Ed Sheeran - Shape of You', correct: true},
                {ans: 'The Weeknd - Blinding Lights', correct: false},
                {ans: 'Tones And I - Dance Money', correct: false},
                {ans: 'Post Malone, 21 Savage - rockstar', correct: false}
        ]},

        {
            question: 'What year was Canada founded?', 
            answers: [
                {ans: '1867', correct: true},
                {ans: '1841', correct: false},
                {ans: '1877', correct: false},
                {ans: '1825', correct: false}
        ]},

        {
            question: 'When did World War 2 end?', 
            answers: [
                {ans: '1945', correct: true},
                {ans: '1939', correct: false},
                {ans: '1955', correct: false},
                {ans: '1950', correct: false}
        ]},

        {
            question: 'What is the biggest country in the world (by area)?', 
            answers: [
                {ans: 'Russia', correct: true},
                {ans: 'Canada', correct: false},
                {ans: 'China', correct: false},
                {ans: 'United States', correct: false}
        ]},

        {
            question: 'In which country was ice cream invented?', 
            answers: [
                {ans: 'China', correct: true},
                {ans: 'Finland', correct: false},
                {ans: 'Italy', correct: false},
                {ans: 'France', correct: false}
        ]},

        {
            question: 'What year was the first Spider-Man movie released?', 
            answers: [
                {ans: '2002', correct: true},
                {ans: '2000', correct: false},
                {ans: '2003', correct: false},
                {ans: '2001', correct: false}
        ]},

        {
            question: 'Which planet has the highest gravity?', 
            answers: [
                {ans: 'Jupiter', correct: true},
                {ans: 'Earth', correct: false},
                {ans: 'Neptune', correct: false},
                {ans: 'Saturn', correct: false}
        ]},

        {
            question: 'Who won the 2018 FIFA World Cup?', 
            answers: [
                {ans: 'France', correct: true},
                {ans: 'Germany', correct: false},
                {ans: 'Spain', correct: false},
                {ans: 'Brazil', correct: false}
        ]},

        {
            question: 'Who won the Stanley Cup 2015?', 
            answers: [
                {ans: 'Chicago Blackhawks', correct: true},
                {ans: 'Tampa Bay Lightning', correct: false},
                {ans: 'Pittsburgh Penguins', correct: false},
                {ans: 'Florida Panthers', correct: false}
        ]},

        {
            question: 'What is the boiling point of water (celcius)?', 
            answers: [
                {ans: '100', correct: true},
                {ans: '102', correct: false},
                {ans: '105', correct: false},
                {ans: '110', correct: false}
        ]},

        {
            question: 'Who is the highest-paid athlete of 2022?', 
            answers: [
                {ans: 'Lionel Messi', correct: true},
                {ans: 'LeBron James', correct: false},
                {ans: 'Canelo Alvarez', correct: false},
                {ans: 'Tiger Woods', correct: false}
        ]},

        {
            question: 'When was YouTube created?', 
            answers: [
                {ans: '2005', correct: true},
                {ans: '2006', correct: false},
                {ans: '2004', correct: false},
                {ans: '2003', correct: false}
        ]},

        {
            question: 'The Last Supper was painted by which artist?', 
            answers: [
                {ans: 'Leonardo DiVinci', correct: true},
                {ans: 'Vincent Van Gogh', correct: false},
                {ans: 'Claude Monet', correct: false},
                {ans: 'Andy Warhol', correct: false}
        ]},

        {
            question: 'The fear of trees is called what?', 
            answers: [
                {ans: 'Dendrophobia', correct: true},
                {ans: 'Anatidaephobia', correct: false},
                {ans: 'Glossophobia', correct: false},
                {ans: 'Astraphobia', correct: false}
        ]},

        {
            question: 'Albania, Bulgaria, North Macedonia, and Turkey are the four nations that border which country?', 
            answers: [
                {ans: 'Greece', correct: true},
                {ans: 'France', correct: false},
                {ans: 'Sweden', correct: false},
                {ans: 'Ukraine', correct: false}
        ]},

        {
            question: 'Where is Easter Island located?', 
            answers: [
                {ans: 'Chile', correct: true},
                {ans: 'China', correct: false},
                {ans: 'England', correct: false},
                {ans: 'Finland', correct: false}
        ]},

        {
            question: 'Hephaestus, is the Greek god of what?', 
            answers: [
                {ans: 'Fire', correct: true},
                {ans: 'Metal', correct: false},
                {ans: 'Smoke', correct: false},
                {ans: 'Vision', correct: false}
        ]},

        {
            question: 'Which animal is not part of a Chimera?', 
            answers: [
                {ans: 'Eagle', correct: true},
                {ans: 'Lion', correct: false},
                {ans: 'Snake', correct: false},
                {ans: 'Goat', correct: false}
        ]}, 

        {
            question: 'Who are the two artists that make up the duo, \"LMFAO\"?', 
            answers: [
                {ans: 'Redfoo & Sky Blu', correct: true},
                {ans: 'Redfoo & Daze', correct: false},
                {ans: 'Major Snake & Berry Gordy', correct: false},
                {ans: 'Malcolm & Lewis', correct: false}
        ]}, 

        {
            question: 'What pop singer is known as "The Material Girl?', 
            answers: [
                {ans: 'Madonna', correct: true},
                {ans: 'Taylor Swift', correct: false},
                {ans: 'Britney Spears', correct: false},
                {ans: 'Chrstina Aguilera', correct: false}
        ]},

        {
            question: 'What singer holds the world record for most words in a hit single?', 
            answers: [
                {ans: 'Eminem', correct: true},
                {ans: 'Kanye West', correct: false},
                {ans: 'Busta Rhymes', correct: false},
                {ans: '50 Cent', correct: false}
        ]}, 

        {
            question: 'Who one was NOT part of the American hip hop group, N.W.A?', 
            answers: [
                {ans: 'Nas', correct: true},
                {ans: 'Eazy-E', correct: false},
                {ans: 'MC Ren', correct: false},
                {ans: 'DJ Yella', correct: false}
        ]}, 

        {
            question: 'Who sang the song \"Baby One More Time\"?', 
            answers: [
                {ans: 'Britney Spears', correct: true},
                {ans: 'Madonna', correct: false},
                {ans: 'Christina Aguilera', correct: false},
                {ans: 'Jennifer Lopez', correct: false}
        ]}, 

        {
            question: 'What year did the movie \"Terminator\" first release?', 
            answers: [
                {ans: '1984', correct: true},
                {ans: '1980', correct: false},
                {ans: '1977', correct: false},
                {ans: '1988', correct: false}
        ]}, 

        {
            question: 'Hafþór Júlíus Björnsson, holds the record for heaviest deadlift. How much did he lift?', 
            answers: [
                {ans: '501 kg', correct: true},
                {ans: '456 kg', correct: false},
                {ans: '555 kg', correct: false},
                {ans: '600 kg', correct: false}
        ]}, 

        {
            question: 'What is Albert Einstein\'s IQ?', 
            answers: [
                {ans: '160', correct: true},
                {ans: '150', correct: false},
                {ans: '180', correct: false},
                {ans: '200', correct: false}
        ]}, 

        {
            question: 'When was Amazon founded?', 
            answers: [
                {ans: '1994', correct: true},
                {ans: '1999', correct: false},
                {ans: '2000', correct: false},
                {ans: '1991', correct: false}
        ]}, 

        {
            question: 'What is Albert Einstein\'s IQ?', 
            answers: [
                {ans: '160', correct: true},
                {ans: '150', correct: false},
                {ans: '180', correct: false},
                {ans: '200', correct: false}
        ]}, 

        {
            question: 'Which song was NOT released in 2010?', 
            answers: [
                {ans: 'Macklemore & Ryan Lewis, Wanz - Thrift Shop', correct: true},
                {ans: 'Kesha - Tik Tok', correct: false},
                {ans: 'Train - Hey, Soul Sister', correct: false},
                {ans: 'Katy Perry, Snoop Dogg - California Gurls', correct: false}
        ]}, 

        {
            question: 'Who did Conor McGregor defeat in order to become the UFC Featherweight Champion?', 
            answers: [
                {ans: 'Jose Aldo', correct: true},
                {ans: 'Chad Mendes', correct: false},
                {ans: 'Eddie Alvarez', correct: false},
                {ans: 'Nate Diaz', correct: false}
        ]}, 

        {
            question: 'Which country does NOT have the Euro as their offical currency?', 
            answers: [
                {ans: 'Denmark', correct: true},
                {ans: 'Germany', correct: false},
                {ans: 'France', correct: false},
                {ans: 'Greece', correct: false}
        ]}, 

        {
            question: 'Tigers are native only to which continent?', 
            answers: [
                {ans: 'Asia', correct: true},
                {ans: 'South America', correct: false},
                {ans: 'Africa', correct: false},
                {ans: 'North America', correct: false}
        ]}, 

        {
            question: 'In Greek Mythology, how many heads did the dog Cerberus have who guarded the entrance to Hades?', 
            answers: [
                {ans: '3', correct: true},
                {ans: '2', correct: false},
                {ans: '1', correct: false},
                {ans: '5', correct: false}
        ]}, 

        {
            question: 'Who was the Siberian monk who gained the confidence of Tsar Nicholas II of Russia?', 
            answers: [
                {ans: 'Rasputin', correct: true},
                {ans: 'Saint Francis of Assisi', correct: false},
                {ans: 'Nostradamus', correct: false},
                {ans: 'Saucon', correct: false}
        ]}, 

        {
            question: 'How many balls are in 8 ball pool?', 
            answers: [
                {ans: '15', correct: true},
                {ans: '10', correct: false},
                {ans: '8', correct: false},
                {ans: '20', correct: false}
        ]}, 

        {
            question: 'What is a baby goat called?', 
            answers: [
                {ans: 'Kid', correct: true},
                {ans: 'Sheep', correct: false},
                {ans: 'Bridge', correct: false},
                {ans: 'Gib', correct: false}
        ]},

        {
            question: 'What is a baby turley called?', 
            answers: [
                {ans: 'Poults', correct: true},
                {ans: 'Pups', correct: false},
                {ans: 'Joey', correct: false},
                {ans: 'Chick', correct: false}
        ]},

        {
            question: 'How many hearts does a giraffe have?', 
            answers: [
                {ans: '1', correct: true},
                {ans: '2', correct: false},
                {ans: '5', correct: false},
                {ans: '4', correct: false}
        ]},

        {
            question: 'What is another name for a Matryoshka Doll?', 
            answers: [
                {ans: 'Russian Nesting Doll', correct: true},
                {ans: 'Vodo Doll', correct: false},
                {ans: 'Action Figure', correct: false},
                {ans: 'Marianna Doll', correct: false}
        ]},

        {
            question: 'Of the twelve signs of the Zodiac which one is known as \'The Archer\'?', 
            answers: [
                {ans: 'Sagittarius', correct: true},
                {ans: 'Virgo', correct: false},
                {ans: 'Capricorn', correct: false},
                {ans: 'Aquarius', correct: false}
        ]},

        
    ]
    return questions;
}