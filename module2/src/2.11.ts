{
  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type nameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;
  // Partial
  type PersonPartial = Partial<Person>;
  // Read only
  type PersonReadOnly = Readonly<Person>;
  const person1: PersonReadOnly = {
    name: "Mr X",
    age: 200,
    contactNo: "017",
  };

  // Record type
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  type MyObj = Record<string, string>

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc"
  };

  // End
}
