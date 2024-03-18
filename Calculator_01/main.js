"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
function startCalculator() {
    return __awaiter(this, void 0, void 0, function* () {
        let c_animation = chalk_1.default.green("Let's get Started");
        console.log(c_animation);
    });
}
startCalculator();
let user_input1 = await inquirer_1.default.prompt({
    type: "number",
    name: "number1",
    message: "Enter your first number",
});
let user_input2 = await inquirer_1.default.prompt({
    type: "number",
    name: "number2",
    message: "Enter your second number",
});
let user_input3 = await inquirer_1.default.prompt({
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
