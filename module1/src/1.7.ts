const bros1 = ["Mizan", "Firoz", "Mir"];
const bros2 = ["Mizan", "Firoz", "Mir"];
bros1.push(...bros2)
console.log(bros1)

// Rest operator
const greetFriends = (...friends: string[]) => {
  friends.forEach(elem => {
    console.log(`hi ${elem}`)
  });
  greetFriends("mohiuddin")
}