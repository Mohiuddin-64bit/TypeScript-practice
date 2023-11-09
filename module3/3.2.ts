{
  // oop - inheritence

  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string
    ) {
      super(name, age, address);
    }
    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take ${numberOfClass}`);
    }
  }
  const Student1 = new Student("Mohiuddin", 21, "Dhaka");
  const Teacher1 = new Teacher("Mr. Teacher", 40, "Dhaka", "Professor");

  
  
  // End
}
