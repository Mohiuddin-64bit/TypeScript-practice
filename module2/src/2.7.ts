{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(
    obj: X,
    key: Y
  ) => {
    return obj[key];
  };

  const user = {
    name: "Mr. Mohiuddin",
    age: 21,
    address: "dhaka",
  };

  const result1 = getPropertyValue(user, "age");

  // End
}
