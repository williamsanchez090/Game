/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//constructor stats: name, health, xp, weapon, special move

class Character {
  constructor(name, health, strength, exp, coins, taunt) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.exp = exp;
    this.coins = coins;
    this.taunt = taunt;
  }
  //what methods should we include?
  describe() {
    return `${this.name} has a strength of ${this.strength}, ${this.health} health remaining, ${this.coins} coins, and ${this.exp} XP.`;
  }
  alertTaunt() {
    alert(this.taunt);
  }
  attack(target) {
    if (target.health === 0) {
      return `${target.name} is already dead.`;
    }
    if (this.health > 0) {
      const damage = this.strength;
      target.health -= damage;
      console.log(
        `${this.name}\'s attack does ${damage} damage to ${target.name}!`
      );
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health left!`);
      } else {
        target.health = 0;
        const addExp = 5;
        console.log(
          `${this.name} defeated ${target.name}. ${this.name}, received ${addExp} experience points, and ${target.coins} coins`
        );
        this.exp += addExp;
        this.coins += target.coins;
        target.coins = 0;
      }
    } else {
      return `${this.name} was defeated! They can't fight anymore!`;
    }
  }
}

//objects
const king = new Character(
  "King",
  50,
  5,
  0,
  72,
  "violence for violence is the rule of the beasts"
);
const nani = new Character(
  "Nani",
  50,
  7,
  0,
  45,
  "super kongfu woof woof on your assssss"
);
const aizawa = new Character(
  "Aizawa",
  50,
  9,
  0,
  61,
  "Why Is Everyone Around Me So Noisy?"
);
const momiji = new Character("Momiji", 50, 10, 0, 49, "yo mommaaaa");
const ghost = new Character(
  "ghost",
  50,
  7,
  0,
  45,
  "I take out the weak.. one.. by.. one"
);
const bojji = new Character("Bojji", 50, 6, 0, 48, "uhhhh");
const squiddy = new Character(
  "Squiddy",
  50,
  8,
  0,
  28,
  "ink, INK, ink, SQUISSSH SQ-SQUISHH"
);
const flambo = new Character(
  "Flambo",
  50,
  7,
  0,
  30,
  "It is what it is, you get how you live"
);
const bigPapa = new Character(
  "Big Papa",
  50,
  6,
  0,
  57,
  "throw your hands in the air if you's a true player"
);
