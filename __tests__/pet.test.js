const Pet = require ('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property',() => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });

    it ('has an initial age of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });
});

  
  describe('growUp', () => {
    it ('increments the age by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect (pet.age).toEqual(1);
    });
  });

  describe ('hunger', () => {
    it('has an initial hunger of 0', () => {
      const pet = new Pet ('Fido');
      expect (pet.hunger).toEqual (0);
    });
  
    it ('increases by 5 when growUp occurs', () => {
      const pet = new Pet ('Fido');
      pet.growUp();
      expect (pet.hunger).toEqual(5);
    });
  });

  describe ('fitness', () => {
    it('has an initial fitness of 10', () => {
      const pet = new Pet ('Fido');
      expect (pet.fitness).toEqual(10);
    })
    it ('decreases by 3 when growUp occurs', () => {
const pet = new Pet ('Fido');
pet.growUp();
expect (pet.fitness).toEqual(7);
    });
  });
  
  describe ('walk', () => {
    it ('increases fitness by 4', ()=> {
      const pet = new Pet ('Fido');

      pet.fitness = 4;
      pet.walk();

    expect (pet.fitness).toEqual(8);
  });
  it('increases fitness by a maximum of 10', () => {
    const pet = new Pet('Fido');

    pet.fitness=8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});

  it('decreases hunger by 3', () => {
    const pet = new Pet ('Fido');
    pet.hunger = 5;
    pet.feed();
    
    expect(pet.hunger).toEqual(2);
  });

  it('hunger level cannot go below 0', () => {
    const pet = new Pet ('Fido');

    pet.hunger = 2;
    pet.feed();
    
    expect(pet.hunger).toEqual(0);
  });

  describe('checkUp', () => {
  it('returns "I need a walk" when fitness <=3', () => {
    const pet = new Pet ('Fido');
    pet.fitness=3;
    pet.hunger=1;
    
    expect (pet.checkUp()).toEqual('I need a walk');
  });

  it('returns "I am hungry" when hunger >=5 and fitness>3', () =>{
    const pet = new Pet ('Fido');
    pet.fitness = 5;
    pet.hunger = 7;

    expect (pet.checkUp()).toEqual('I am hungry');
  });

  it('returns "I am hungry AND I need a walk" when hunger >=5 and fitness <=3', () =>{
    const pet = new Pet ('Fido');
    pet.fitness = 3;
    pet.hunger= 7;

    expect (pet.checkUp()).toEqual('I am hungry AND I need a walk');
  });

  it('returns "I feel great!" when hunger <5 and fitness >3', () => {
    const pet = new Pet ('Fido');
    pet.fitness = 5;
    pet.hunger = 2;

    expect (pet.checkUp()).toEqual('I feel great!');
  });
});

describe ('isAlive', () => {
it('returns false when pet fitness <=0', () => {
const pet = new Pet ('Fido');

pet.fitness = 0
expect(pet.isAlive).toEqual(false);

pet.fitness = 5;
expect(pet.isAlive).toEqual(true);
});

it('returns false when pet hunger >=10', () => {
  const pet = new Pet ('Fido');

  pet.hunger = 10;
  expect(pet.isAlive).toEqual(false);

  pet.hunger = 6;
  expect (pet.isAlive).toEqual(true);
  });

it('returns false when pet age >=30 or returns true when pet age <30', () => {
    const pet = new Pet ('Fido');

    pet.age = 30;
    expect(pet.isAlive).toEqual(false);
    
    pet.age = 29;
    expect(pet.isAlive).toEqual(true);

    });

    describe ('feed', () => {
      it ('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
      });

    describe ('walk', () => {
      it ('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
      });
  
      describe('growUp', () => {
        it ('throws an error if the pet is not alive', () => {
          const pet = new Pet('Fido');
          pet.hunger =10
          expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
        });
      });
    });
    });

});