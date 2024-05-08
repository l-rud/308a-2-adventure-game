//Part 1: Humble Beginnings

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
    },
    //Give Robin a method for “dice rolls,” a common way to handle outcomes in adventuring games:
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    },
};

//Use  the forEach method to iterates over each element in the inventory array 
//and logs each element to the console:
adventurer.inventory.forEach((item) => {
    console.log(item);
});
//Add a “companion” sub-object to “Leo”
adventurer.companion.companion2 = {
    name: "Frank",
    type: "Flea",
    inventory: ["small hat", "sunglasses"],
};
console.log(adventurer);
//Test the “dice rolls” method by calling adventurer.roll():
adventurer.roll();


//Part 2: Class Fantasy

/* Basic Character class looks like so far, 
including a constructor function that allows us to create new characters 
with whatever name we would like: */
class Character {
    static MAX_HEALTH = 100;
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    //Every character should also be able to make rolls. Add the roll method to the Character class:
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

//In order to effectively create companions, 
//we need to extend the Character class for added specificity:

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
}


//Part 3: Class Features

//Let’s begin by creating an Adventurer class. 
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    // Adventurers have the ability to search for artifacts.
    searchingForArtifacts() {
        console.log(`${this.name} search for artifacts...`);
        super.roll();
    }
}

//Create Robin using the Adventurer class:
const robin = new Adventurer("Robin", "Scout");
//Adding new items to the adventurer's inventory:
robin.inventory.push.apply(robin.inventory, ["sword", "potion", "artifact"]);
//Create first companion using the Companion class:
robin.companion = new Companion("Leo", "Cat");
//Create second companion using the Companion class:
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
robin.scout();
robin.searchingForArtifacts();


//Part 4: Class Uniforms

//Add a static MAX_HEALTH property to the Character class, equal to 100 (line 40)
