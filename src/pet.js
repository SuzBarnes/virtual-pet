const MAXIMUM_FITNESS = 100;
const MINIMUM_HUNGER = 0;
const STARTATZERO = 0;
const STARTFITNESS = 100;
const YEARSAGED = 1;

class Pet {
    constructor(name){
        this.name = name;
        this.age = STARTATZERO,
        this.hunger = STARTATZERO;
        this.fitness = STARTFITNESS;
        this.babies = [];
    
        this.initialiseHouse();
        
        document.querySelector('#foodbowl').addEventListener('click', () => {
            this.feedPet();
           this.renderMessage(`My hunger is now at ${this.hunger}%`);
            
        });
    
        document.querySelector('#walkimage').addEventListener('click', () => {
            this.walk();
            this.renderMessage(`Thank you for the walk ${yourname}! My fitness is now at ${this.fitness}%`);
        });
    
        document.querySelector('#growupimage').addEventListener('click', () =>
        {
            this.growUp();
            this.renderMessage(`It's my birthday! I am ${this.age} years old today!`);
        });
        
        document.querySelector('#checkupimage').addEventListener('click', () =>
        {
            this.renderMessage(`${this.checkUp()}`
            );
            
        });

    };
    


    getisAlive() {
        return this.age <30 && this.hunger <100 && this.fitness >0;
    }

initialiseHouse() { /* for the room image to be placed as background */
    const backgrounds =[
        '../virtual-pet/images/room.png'
    ];
    let backgroundIndex = 0;
    window.document.querySelector('#viewport').style.backgroundImage= `url('${backgrounds[backgroundIndex%backgrounds.length]}')`;
        backgroundIndex += 1;

};

renderPet() { /*for the pet image to be put into the house*/
    const pet = this.pet;
    const petElement = document.querySelectory('#pet');
};

renderFoodBowl() { /* empty food bowl image that stays there until filled for a few seconds */
    const foodbowl = this.foodbowl;
    const foodbowlElement = document.querySelector('#foodbowl');
}

growUp() {
    if (!this.getisAlive()){
        this.renderMessage(`${this.name} is no longer alive :(`);
        this.dead();
    };
this.age += YEARSAGED;
this.fitness -=30;
this.hunger +=50;
};

checkUp() {
    if (!this.getisAlive()){
        this.renderMessage(`${this.name} is no longer alive :(`);
        this.dead();
        
    }
        else if (this.fitness<=30 && this.hunger<50){
            return('I need a walk')
        } else if (this.hunger>=50 && this.fitness>30){
             return('I am hungry')
            } else if (this.hunger>=50 && this.fitness<=30) {
                return('I am hungry AND I need a walk')
            } else {return('I feel great!')
        };
    };
  
  walk() {
    if (!this.getisAlive()){
        this.renderMessage(`${this.name} is no longer alive :(`);
        this.dead();
    };
      if ((this.fitness + 40)<=MAXIMUM_FITNESS){
          this.fitness+= 40;
      } else {
          this.fitness = MAXIMUM_FITNESS;
      }
  };

 feedPet() {
    if (!this.getisAlive()){
        this.renderMessage(`${this.name} is no longer alive :(`);
        this.dead();
    };
      if((this.hunger-30)>=MINIMUM_HUNGER){
          this.hunger-=30;
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

renderMessage (message) {
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerHTML = message;

    const viewport = document.querySelector('#rendermessage');
    viewport.appendChild(messageElement);

    setTimeout(() => {
        viewport.removeChild(messageElement);
    }, 3000)
    
};

dead(){
    document.querySelector("#viewport").style.background="url('images/dead.jpg')"
    document.querySelector('#checkupimage').remove();
    document.querySelector('#foodbowl').remove();
    document.querySelector('#walkimage').remove();
    document.querySelector('#growupimage').remove();
    setTimeout(() => {
        document.querySelector('#rendermessage').remove()
    }, 3000)
}

};
if(typeof module !== 'undefined' && module.exports){
    module.exports = Pet;
} else {
    window.pet= Pet;
}

/*To Do:
- set up a stats list that is updated
- make bluey blink
- make it so speech bubble disappears
- add in when it is the birthday that confetti displays
- make it so you can adopt/have a baby
*/
