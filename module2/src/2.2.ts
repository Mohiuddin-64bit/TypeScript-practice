{
  // Interface

  type User1 = {
    name: string;
    age: number;
  };
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user2: UserWithRole2 = {
    name: "Nadim",
    age: 22,
    role: "Admin",
  };

  type UserWithRole1 = User1 & { role: string };

  const user1: UserWithRole1 = {
    name: "mohiuddin",
    age: 23,
    role: "member",
  };

  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber1: Roll2 = [1, 2, 3];

  type Add = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;
}
