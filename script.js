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
//Create a loop that logs each item in Robin’s inventory
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
