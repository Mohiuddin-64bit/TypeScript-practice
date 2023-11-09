// Reference type --> Object
const user: {
  firstName: string;
  age: number;
  developer: boolean;
} = {
  firstName: "Mohiuddin",
  age: 21,
  developer: true,
};

// Optional type
const user2: {
  // company: "ABSS"; // literal type
  readonly company: string;
  firstName: string;
  age: number;
  developer?: boolean; // optional type
} = {
  company: "ABSS",
  firstName: "Mohiuddin",
  age: 21,
};
