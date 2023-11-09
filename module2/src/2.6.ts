{
  // Constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next level web developer";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    id: 1,
    name: "Mr. X",
    email: "X@gmail.com",
  });
  const student2 = addCourseToStudent({
    id: 2,
    name: "Mr. Y",
    email: "Y@gmail.com",
    hasWatch: "Apple",
  });

  // End
}
