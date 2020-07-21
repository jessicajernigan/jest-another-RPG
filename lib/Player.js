const Potion = require('../lib/Potion');

function Player(name = '') {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion('health'), new Potion()];

};

// When using prototype, however, you are only creating the method once on the constructor itself. New player objects simply inherit the method from the constructor rather than having their own instances of that method. 
Player.prototype.getStats = function () {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility
  };
};

Player.prototype.getInventory = function () {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

// Ideally, the getStats() method will return an object containing a subset of the player's properties. 
// The getInventory() method will return an array of Potion objects or return false if the inventory is empty.

module.exports = Player;