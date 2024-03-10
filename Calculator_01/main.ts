import inquirer from "inquirer";

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
  choices: ["addition", "substraction", "multiplication", "division"],
});

function calculate(
  user_input1: number,
  user_input2: number,
  user_input3: string
) {
  if (user_input3 === "addition") {
    console.log(user_input1 + user_input2);
  } else if (user_input3 === "substraction") {
    console.log(user_input1 - user_input2);
  } else if (user_input3 === "multiplication") {
    console.log(user_input1 * user_input2);
  } else if (user_input3 === "division") {
    console.log(user_input1 / user_input2);
  } else {
    console.log("not a valid operation");
  }
}
// input no :- 1
console.log(user_input1.number1);
// input no :- 2 
console.log(user_input2.number2);
// your operator.
console.log(user_input3.operator);

// your answer
calculate(user_input1.number1, user_input2.number2, user_input3.operator);
