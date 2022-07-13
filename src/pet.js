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

    this.initialiseHouse;
    
    document.querySelector('#foodbutton').addEventListener('click', () => {
        console.log(`hunger = ${this.hunger}`);
        this.feedPet;
        console.log(`hunger = ${this.hunger}`);
    });

    document.querySelector('#walkbutton').addEventListener('click', () => {
        this.walk;
        console.log(`fitness = ${this.fitness}`);
    });

    document.querySelector('#growupbutton').addEventListener('click', () =>
    {
        this.growUp;
        console.log(`${this.age} years old, hunger = ${this.hunger}, fitness = ${this.fitness}`);
    });

    /*document.querySelector('#checkupbutton').addEventListener('click', () => {
        this.checkUp;
    })*/

Pet.prototype = {
    get isAlive() {
        return this.age <30 && this.hunger <10 && this.fitness >0;
    }
};
Pet.prototype.initialiseHouse = function () { /* for the room image to be placed as background */
    const backgrounds =[
        '../virtual-pet/images/room.png'
    ];
    let backgroundIndex = 0;
    window.document.querySelector('#viewport').style.backgroundImage= `url('${backgrounds[backgroundIndex%backgrounds.length]}')`;
        backgroundIndex += 1;

};

Pet.prototype.renderPet = function () { /*for the pet image to be put into the house*/
    const pet = this.pet;
    const petElement = document.querySelectory('#pet');
};

Pet.prototype.renderFoodBowl = function () { /* empty food bowl image that stays there until filled for a few seconds */
    const foodbowl = this.foodbowl;
    const foodbowlElement = document.querySelector('#foodbowl');
}

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

  Pet.prototype.feedPet = function () {
    if (!this.isAlive){
        throw new Error ('Your pet is no longer alive :(');
    };
      if((this.hunger-3)>=MINIMUM_HUNGER){
          this.hunger-=3;
      } else {
          this.hunger = MINIMUM_HUNGER;
      }
  };

/* Pet.prototype.makeBaby = function (babyName) {
    const baby = new Pet (babyName);
    this.baby.unshift(babyName);
};

Pet.prototype.adoptBaby = function (baby) {
    
    this.babies.unshift (baby);

};*/

/*this.prototype.renderMessage= function (message) {
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerHTML = message;

    const viewport = document.querySelector('#viewport');
    viewport.appendChild(messageElement);

    setTimeout(() => {
        viewport.removeChild(messageElement);
    }, 3000)
};*/
};

if(typeof module !== 'undefined' && module.exports){
    module.exports = Pet;
} else {
    window.pet= Pet;
}