{
  // Polymorphisom
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }
  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 5 hours per day`);
    }
  }

  const getSleepingHours = (params: Person) => {
    params.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }
  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    constructor(public height: number, public width: number) {
      super();
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(20, 30);

  getShapeArea(shape1)
  getShapeArea(shape2)
  getShapeArea(shape3)

  // End
}
