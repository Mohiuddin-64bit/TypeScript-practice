{
  // Union types
  // type FrontEndDev = "NotGood" | "JuniorDev";
  // const newDeveloper: FrontEndDev = "JuniorDev";
  // type User = {
  //   name: string;
  //   email?: string;
  //   gender: "male" | "female";
  //   bloodGrp: "O+" | "B+" | "AB+";
  // };
  // const user1: User = {
  //   name: "Mohiuddin",
  //   gender: "male",
  //   bloodGrp: "O+",
  // };

  type FrontEndDeveloper = {
    skills: string[];
    designation: "Frontend developer";
  };
  type BackEndDeveloper = {
    skills: string[];
    designation2: "Backend developer";
  };
  type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;
  const fullStack: FullStackDeveloper = {
    skills: ["html", "css", "MERN"],
    designation: "Frontend developer", 
    designation2: 'Backend developer'
  };
}
