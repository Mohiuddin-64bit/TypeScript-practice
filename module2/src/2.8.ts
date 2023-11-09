{
  type Todo = {
    id: number;
    useId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
    return data;
  };
  getTodo();

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // Calling function
  const showData = async () => {
    const data = await createPromise();
    // return data;
    // console.log(data);
  };
  showData();

  // End
}
