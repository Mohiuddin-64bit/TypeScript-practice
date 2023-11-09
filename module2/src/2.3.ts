{
  // Generic type

  type GenericArray<T> = Array<T>;

  const rollNumbers: GenericArray<number> = [3, 6, 8];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  const boolArray: GenericArray<boolean> = [true, false, true];

  type GenericTuple<x, y> = [x, y];
  const manush: GenericTuple<string, string> = ["x", "y"];

  
  const UserWithID : GenericTuple<number, {name: string, email: string}> = [123, {name: "mohiuddin", email: "mohiuddin.niddu@gamil.com"}]


  













}
