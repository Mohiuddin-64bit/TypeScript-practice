{
  // Function with generics
  const createArray = (params: string): string[] => {
    return [params];
  };
  const createArrayWithGenerics = <T>(params: T): T[] => {
    return [params];
  };

  const res1 = createArray("bangladesh");
  const res2 = createArrayWithGenerics<String>("bangladesh");

  type genericObj = {
    id: number;
    name: string;
  };
  const resGenericObj = createArrayWithGenerics<genericObj>({
    id: 22,
    name: "Mohiuddin",
  });

  const createArrayWithTuple = <T, Q>(params1: T, params2: Q): [T, Q] => {
    return [params1, params2];
  };
  const res3 = createArrayWithTuple<string, number>("bangladesh", 222);
  const res4 = createArrayWithTuple<string, { name: string }>("bangladesh", {
    name: "Mohiuddin",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web developer";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({ name: "Mr. X", email: "X@gmail.com" });
  const student2 = addCourseToStudent({ name: "Mr. Y", email: "Y@gmail.com", hasWatch: "Apple" });
  
}
