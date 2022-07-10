class Controller {
    constructor (pet){
    this.pet = pet;
    this.initialiseHouse();

    };

initialiseHouse() {
    const backgrounds =[
        '../virtual-pet/images/room.png'
    ];
    let backgroundIndex = 0;
    window.document.querySelector('#viewport').style.backgroundImage= `url('${backgrounds[backgroundIndex%backgrounds.length]}')`;
        backgroundIndex += 1;

};
}