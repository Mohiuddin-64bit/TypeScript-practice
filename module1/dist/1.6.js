"use strict";
// Learning function
// Normal function
// Arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
// Object --> function --> method
const poorUser = {
    name: "Mohiuddin",
    balance: 0,
    addBalance(balance) {
        return `My new balance is: ${this.balance + balance}`;
    },
};
