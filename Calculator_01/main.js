import inquirer from "inquirer";
import chalk from "chalk";
async function startCalculator() {
    let c_animation = chalk.green("Let's get Started");
    console.log(c_animation);
}
startCalculator();
let user_input1 = await inquirer.prompt({
    type: "number",
    name: "number1",
    message: "Enter your first number",
});
let user_input2 = await inquirer.prompt({
    type: "number",
    name: "number2",
    message: "Enter your second number",
});
let user_input3 = await inquirer.prompt({
    type: "list",
    name: "operator",
    message: "enter your operator",
    choices: [
        "addition",
        "substraction",
        "multiplication",
        "division",
        "exponent",
        "reminder",
    ],
});
function calculate(user_input1, user_input2, user_input3) {
    if (user_input3 === "addition") {
        console.log(user_input1 + user_input2);
    }
    else if (user_input3 === "substraction") {
        console.log(user_input1 - user_input2);
    }
    else if (user_input3 === "multiplication") {
        console.log(user_input1 * user_input2);
    }
    else if (user_input3 === "division") {
        console.log(user_input1 / user_input2);
    }
    else if (user_input3 === "exponent") {
        console.log(user_input1 ** user_input2);
    }
    else if (user_input3 === "reminder") {
        console.log(user_input1 % user_input2);
    }
    else {
        console.log("not a valid operation");
    }
}
// input no :- 1
console.log("First Number is:", user_input1.number1);
// input no :- 2
console.log("Second Number is:", user_input2.number2);
// your operator.
console.log("The Operator is:", user_input3.operator);
// your answer
const res = calculate(user_input1.number1, user_input2.number2, user_input3.operator);
