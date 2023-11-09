{
  // Type Guards

  // Typeof --> type guard

  type Alpha = string | number;

  const add = (param1: Alpha, param2: Alpha): Alpha => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, "4");
  console.log(result1);

  // in Guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "Admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };
  const normalUser: NormalUser = {
    name: "Mr. Normal user",
  };
  const adminUser: AdminUser = {
    name: "Mr. Admin user",
    role: "Admin",
  };
  getUser(adminUser);

  // End
}
