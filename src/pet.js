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
    this.checkUp = function() {
        if (this.fitness<=3 && this.hunger<5){
            return('I need a walk')
        } else if (this.hunger>=5 && this.fitness>3){
             return('I am hungry')
            } else if (this.hunger>=5 && this.fitness<=3) {
                return('I am hungry AND I need a walk')
            } else {return('I feel great!')
        };
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