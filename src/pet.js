const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const STARTATZERO = 0;
function Pet(name) {
    this.name = name;
    this.age = STARTATZERO,
    this.hunger = STARTATZERO;
    this.fitness =10;
    this.growUp = function () {
        this.age+=1;
        this.fitness-=3;
        this.hunger+=5;
    };
    this.walk= function() {
      if ((this.fitness + 4)<=10){
          this.fitness+= 4;
      } else {
          this.fitness = 10;
      }
  };
  this.feed = function () {
      if((this.hunger-3)>=0){
          this.hunger-=3;
      } else {
          this.hunger = 0;
      }
  }
};

module.exports = Pet;