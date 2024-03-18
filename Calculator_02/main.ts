import inquirer from "inquirer";

let operation = await inquirer.prompt([
  { type: "number", name: "number1", message: "Enter Your First Number" },
  {
    type: "list",
    name: "operator",
    message: "select your operator",
    choices: [
      "addition",
      "substraction",
      "multiplication",
      "division",
      "modulus",
      "power",
      "square root",
      "cube root",
      "percentage",
      "square",
      "cube",
      "prime number",
      "even or odd",
      "modulus",
    ],
  },

  { type: "number", name: "number2", message: "Enter Your second Number" },
]);

if (operation.operator === "addition") {
  console.log(operation.number1 + operation.number2);
} else if (operation.operator === "substraction") {
  console.log(operation.number1 - operation.number2);
} else if (operation.operator === "multiplication") {
  console.log(operation.number1 * operation.number2);
} else if (operation.operator === "division") {
  console.log(operation.number1 / operation.number2);
} else if (operation.operator === "modulus") {
  console.log(operation.number1 % operation.number2);
} else if (operation.operator === "power") {
  console.log(operation.number1 ** operation.number2);
} else if (operation.operator === "percentage") {
  console.log((operation.number1 * operation.number2) / 100);
} else if (operation.operator === "square root") {
  console.log(Math.sqrt(operation.number1));
} else if (operation.operator === "cube root") {
  console.log(Math.cbrt(operation.number1));
} else if (operation.operator === "square") {
  console.log(operation.number1 ** 2);
} else if (operation.operator === "cube") {
  console.log(operation.number1 ** 3);
  // } else if (operation.operator === "prime number") {
  //   console.log(operation.number1 + operation.number2);
} else if (operation.operator === "even or odd") {
  if (operation.number1 % 2 == 0) {
    console.log("It is even");
  } else {
    console.log("It is odd");
  }
}
