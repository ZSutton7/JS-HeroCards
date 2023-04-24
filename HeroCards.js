//javascript is so fun omg i love javascript!!!

//Hero Data 
const avengers = [ 
    { 
     "name": "Iron Man", 
     "alter_ego": "Tony Stark", 
     "primary_power": 
     "Powered Armor", "universe": 
     "Marvel Cinematic Universe", "age": 48 
    },
    {
      "name": "Captain America", 
      "alter_ego": "Steve Rogers", 
      "primary_power": "Super Soldier Serum", 
      "universe": "Marvel Cinematic Universe", "age": 105 
    }, 
    { 
      "name": "Thor", 
      "alter_ego": "Thor Odinson",
      "primary_power": "Super Strength", 
      "universe": "Marvel Cinematic Universe", 
      "age": 1500 
    },
    {
      "name": "The Hulk", 
      "alter_ego": "Bruce Banner",
      "primary_power": "Super Strength",
      "universe": "Marvel Cinematic Universe",
      "age": 49 
    },
    { 
      "name": "Black Widow",
       "alter_ego": "Natasha Romanoff",
      "primary_power": "Expert Spy and Assassin",
      "universe": "Marvel Cinematic Universe",
      "age": 37
    },
    {
      "name": "Hawkeye", 
      "alter_ego": "Clint Barton",
      "primary_power": "Expert Marksman",
      "universe": "Marvel Cinematic Universe",
      "age": 51
    }
];



for (let i = 0; i < avengers.length; i++) {
  // Log the name of the current hero
  console.log(avengers[i].name);

  // Check if the current hero has the power of "Super Strength"
  if (avengers[i].primary_power === "Super Strength") {
    // If so, log their name
    console.log(avengers[i].name);
  }

  // Check if the current hero is over 50
  if (avengers[i].age >= 50) {
    // If so, log their name and age
    console.log(avengers[i].name + " (" + avengers[i].age + ")");
  }
}




