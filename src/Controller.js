const Pet = require("./pet");

class Controller {
    constructor (pet){
    this.pet = pet;
    this.initialiseHouse();
    document.querySelector('#foodbutton').addEventListener('click', () => {
        this.feedPet();
    })

    };

initialiseHouse() { /* for the room image to be placed as background */
    const backgrounds =[
        '../virtual-pet/images/room.png'
    ];
    let backgroundIndex = 0;
    window.document.querySelector('#viewport').style.backgroundImage= `url('${backgrounds[backgroundIndex%backgrounds.length]}')`;
        backgroundIndex += 1;

};

renderPet(){ /*for the pet image to be put into the house*/
    const pet = this.pet;
    const petElement = document.querySelectory('#pet');
};

renderFoodBowl(){ /* empty food bowl image that stays there until filled for a few seconds */
    const foodbowl = this.foodbowl;
    const foodbowlElement = document.querySelector('#foodbowl');
}

/*namePet(){

}*/

/*growUp(){

} */

feedPet() {
const pet = this.pet;
console.log(pet);

};
/* walkPet(){

} */

/*checkUp(){

} */

renderMessage(message){
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerHTML = message;

    const viewport = document.querySelector('#viewport');
    viewport.appendChild(messageElement);

    setTimeout(() => {
        viewport.removeChild(messageElement);
    }, 3000)
}

};


if(typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
} else {
    window.Controller = Controller;
};