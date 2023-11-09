{
  // Abstraction

  // Interface class

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    moving(): void;
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting");
    }
    stopEngine(): void {
      console.log("I am stoped");
    }
    moving(): void {
      console.log("I am moving");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.stopEngine();

  // Abstraction class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract moving(): void;
  }

  class AudiCar extends Car2 {
    startEngine(): void {
      console.log("I am starting");
    }
    stopEngine(): void {
      console.log("I am stopped the engine")
    }
    moving(): void{
      console.log(" i am moving the car")
    }
  }

  

  // const audiCar = Car2();
  // audiCar.startEngine();

  // ENd
}
