{
  // instanceof guard

  class Animal {
    constructor(public name: string, public species: string) {}
    makeSound() {
      console.log(`I am making sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log(`I am a barking`);
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log(`I am a meaw meaw`);
    }
  }
// smart way to handle this instance
  const isDog = (animal: Animal) : animal is Dog => {
    return animal instanceof Dog;
  }
  const isCat = (animal: Animal) : animal is Cat => {
    return animal instanceof Cat;
  }

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog", "dog");
  const cat = new Cat("Mini biral", "cat");

  getAnimal(dog);
  getAnimal(cat);
  // End
}
