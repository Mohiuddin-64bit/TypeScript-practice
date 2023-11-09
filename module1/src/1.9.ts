{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo: number;
    address: string;
  };

  const student1: Student = {
    name: "mohiuddin",
    age: 21,
    gender: "Male",
    contactNo: 120236569,
    address: "dhaka",
  };

  const student2: Student = {
    name: "Nadim",
    age: 22,
    gender: "Male",
    contactNo: 120236569,
    address: "dhaka",
  };

  // In function

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
