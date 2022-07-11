const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const STARTATZERO = 0;
const STARTFITNESS = 10;
const YEARSAGED = 1;

function Pet(name) {
    this.name = name;
    this.age = STARTATZERO,
    this.hunger = STARTATZERO;
    this.fitness = STARTFITNESS;
    this.babies = [];
    };

Pet.prototype = {
    get isAlive() {
        return this.age <30 && this.hunger <10 && this.fitness >0;
    }
};

Pet.prototype.growUp = function () {
    if (!this.isAlive){
        throw new Error ('Your pet is no longer alive :(');
    };
this.age += YEARSAGED;
this.fitness -=3;
this.hunger +=5;
};

 Pet.prototype.checkUp = function() {
    if (!this.isAlive){
        throw new Error ('Your pet is no longer alive :(');
    };
        if (this.fitness<=3 && this.hunger<5){
            return('I need a walk')
        } else if (this.hunger>=5 && this.fitness>3){
             return('I am hungry')
            } else if (this.hunger>=5 && this.fitness<=3) {
                return('I am hungry AND I need a walk')
            } else {return('I feel great!')
        };
    };
  
  Pet.prototype.walk = function() {
    if (!this.isAlive){
        throw new Error ('Your pet is no longer alive :(');
    };
      if ((this.fitness + 4)<=MAXIMUM_FITNESS){
          this.fitness+= 4;
      } else {
          this.fitness = MAXIMUM_FITNESS;
      }
  };

  Pet.prototype.feed = function () {
    if (!this.isAlive){
        throw new Error ('Your pet is no longer alive :(');
    };
      if((this.hunger-3)>=MINIMUM_HUNGER){
          this.hunger-=3;
      } else {
          this.hunger = MINIMUM_HUNGER;
      }
  };

Pet.prototype.makeBaby = function (babyName) {
    const baby = new Pet (babyName);
    this.baby.unshift(babyName);
};

Pet.prototype.adoptBaby = function (baby) {
    
    this.babies.unshift (baby);

};

if(typeof module !== 'undefined' && module.exports){
    module.exports = Pet;
} else {
    window.pet= Pet;
}