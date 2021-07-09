export const nameGen = () => {
  let names = [
    "Oliver",
    "Leo",
    "Milo",
    "Charlie",
    "Simba",
    "Max",
    "Jack",
    "Loki",
    "Tiger",
    "Jasper",
    "Ollie",
    "Oscar",
    "George",
    "Rudi",
    "Gertrude",
    "Toby",
    "Smokey",
    "Finn",
    "Felix",
  ];
  let randomName = Math.floor(Math.random() * names.length);
  let catName = (randomName, names[randomName]);
  return catName;
};

export const priceGen = () => {
  let price = [
    "20",
    "25",
    "200",
    "40",
    "400",
    "600",
    "125",
    "55",
    "550",
    "500",
    "80",
    "320",
    "370",
    "420",
    "230",
    "90",
    "240",
    "260",
    "100",
  ];
  let randomPrice = Math.floor(Math.random() * price.length);
  let catPrice = (randomPrice, price[randomPrice]);
  return catPrice;
};

export const descGen = () => {
  let desc1 =
    "With an insatiable appetite and love of fine dining, is high maintenance, to say the least. What is lost from your pocket, however, is more than made up for with the lashings of love this cat likes to show. Great with children, dogs and other cats – not so great with gerbils and low-flying insects.";
  let desc2 =
    "Hunter, gatherer and bearer of gifts. I am an outdoor cat and loves to play on that innate urge to catch, toy with and decapitate various garden rodents. Sadly, I was abandoned by my owners - in their kitchen.";
  let desc3 =
    "I am one furry ball of fun and can be kept entertained for hours by means of expressive dance. Our extensive research found that this cat's favourite moves are the 'Tree in the Wind', 'The Bemused Giraffe' and 'The Flipped Tortoise'. Full instructions are enclosed for these with your cat.";
  let desc4 =
    "A shy but caring cat with very few needs. If you want a furry friend to snuggle on the couch with then you have found your perfect cat! *All descriptions may have been correct at the time of writing, and we probably haven't just lied to you. The chances are that this cat isn't a mentalist.";
  let desc5 =
    "Hide your valuables, this cat has a terrible penchant for thievery. Despite this unfortunate trait, our furry friend enjoys basking in the sun, eating, and sleeping. Just don't take your eye off the ball for too long.";
  let desc6 =
    "The perfect furry companion for those with the time. This cat is hard work. Between the 15-mile hikes and early morning starts, this is the cat to push you to the limit.";
  let desc7 =
    "Showing heaps of love and affection, it's so easy to forget this cat's problem of its tendency to get a little murderous.";
  let desc8 =
    "With a meow reaching up to 200db, this cat thing is an ideal security cat. With previous experience as a site security guard, you have all of the peace-of-mind that your home is well and truly guarded.";
  let desc9 =
    "Quite a strange cat with an equally strange habit. 23 hours a day, this cat chases its tail, continuously. We have tried to stop the cycle but the immense speeds reached formed a sort of vortex in centre of the cat's path of trajectory. Losing three team members and a broom handle in the process; we thought it would be wise to pre-warn any prospective owners.";
  let desc10 =
    "A happy cat, maybe a little too happy. What's this cat up to? Where did it even come from? We don't know but it's yours for this bargain price. Please, pay caution to that overly happy personality. It can only spell trouble.";
  let desc11 =
    "A friendly cat with a loving nature. This cat is happiest when asleep beside you or getting stroked. A very timid approach to life means it will take time to form that special bond.";
  let desc12 =
    "Left outside a convent with nothing but a note around its neck, the ordeal this cat has gone through is unknown. Many attempts have been made to help it open up to its past turmoil, but the cat has always remained unresponsive to the one-sided conversations.";
  let desc13 =
    "One of the friendliest cats on our warehouse shelves. This little cutie is a bundle of furry awesomeness and the perfect cat for anyone that is looking for a new addition to their family.";
  let desc14 =
    "A steadfast and determined moggy with a deep-seated hatred for the working class. We suspect this cat is a Tory, but our tests returned inconclusive. Buy at your own risk!";
  let desc15 =
    "After finding this cat lost in a neighbour's garden, we thought we would do the right thing and take it in; give it a home; feed it and then sell it on the internet for a 100% profit. Our love for cats knows no bounds.";
  let desc16 =
    "Quite a shy cat but adorable all the same. You will need to approach this meek moggy with kid gloves. A very friendly cat when finally used to a human, however.";
  let desc17 =
    "Not a very energetic cat, or even an active one. It just kind of sits there, staring at you. Probably a perfect choice for those that often have unexpected visitors. Just bring it out from the cupboard, brush the dust from its fur and position it facing your unwanted guest; they will be gone in no time.";
  let desc18 =
    "Have you got a large fridge? Because this furry fatty will not stop eating. During its time with us it has eaten us out of house and home. Free when bought with another cat.";
  let desc19 =
    "Loves The Office and Alan Partridge, so no real worries if it hogs the remote. Likes popcorn, hotdogs and small children.";

  let descArray = [
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    desc6,
    desc7,
    desc8,
    desc9,
    desc10,
    desc11,
    desc12,
    desc13,
    desc14,
    desc15,
    desc16,
    desc17,
    desc18,
    desc19,
  ];

  let ranDesc = Math.floor(Math.random() * descArray.length);
  let catDesc = (ranDesc, descArray[ranDesc]);
  return catDesc;
};
