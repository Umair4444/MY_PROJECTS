#! /usr/bin/env node
// packages
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let welcome_title = chalkAnimation.rainbow(`Welcome to my Calculator! Please do your Calculation`);
    await sleep();
    welcome_title.stop();
    console.log(chalk.green(`   _____________________
  |  _________________  |
  | |   CALCCULATOR   | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|\n`));
    console.log(chalk.green(`██████╗ ███████╗██╗   ██╗███████╗██╗      ██████╗ ██████╗     ██████╗ ██╗   ██╗    ██╗   ██╗███╗   ███╗ █████╗ ██╗██████╗
██╔══██╗██╔════╝██║   ██║██╔════╝██║     ██╔═══██╗██╔══██╗    ██╔══██╗╚██╗ ██╔╝    ██║   ██║████╗ ████║██╔══██╗██║██╔══██╗
██║  ██║█████╗  ██║   ██║█████╗  ██║     ██║   ██║██████╔╝    ██████╔╝ ╚████╔╝     ██║   ██║██╔████╔██║███████║██║██████╔╝
██║  ██║██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║     ██║   ██║██╔═══╝     ██╔══██╗  ╚██╔╝      ██║   ██║██║╚██╔╝██║██╔══██║██║██╔══██╗
██████╔╝███████╗ ╚████╔╝ ███████╗███████╗╚██████╔╝██║         ██████╔╝   ██║       ╚██████╔╝██║ ╚═╝ ██║██║  ██║██║██║  ██║
╚═════╝ ╚══════╝  ╚═══╝  ╚══════╝╚══════╝ ╚═════╝ ╚═╝         ╚═════╝    ╚═╝        ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝                                                                                                `));
}
async function ask_question() {
    await inquirer
        .prompt([
        // asking for question
        { type: "number", name: "number1", message: "Enter Your First Number" }, // it will ask for input # 1
        {
            type: "list",
            name: "operator",
            message: "select your operator", // it will ask for operator
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
            ],
        },
        { type: "number", name: "number2", message: "Enter Your second Number" }, // it will ask for input # 2
    ])
        .then((operation) => {
        if (operation.operator === "addition") {
            console.log(chalk.green(operation.number1 + operation.number2));
        }
        else if (operation.operator === "substraction") {
            console.log(chalk.green(operation.number1 - operation.number2));
        }
        else if (operation.operator === "multiplication") {
            console.log(chalk.blue(operation.number1 * operation.number2));
        }
        else if (operation.operator === "division") {
            console.log(chalk.magenta(operation.number1 / operation.number2));
        }
        else if (operation.operator === "modulus") {
            console.log(chalk.yellow(operation.number1 % operation.number2));
        }
        else if (operation.operator === "power") {
            console.log(chalk.cyan(operation.number1 ** operation.number2));
        }
        else if (operation.operator === "percentage") {
            console.log(chalk.bgBlueBright((operation.number1 * operation.number2) / 100));
        }
        else if (operation.operator === "square root") {
            console.log(chalk.green(Math.sqrt(operation.number1)));
        }
        else if (operation.operator === "cube root") {
            console.log(chalk.bgGray(Math.cbrt(operation.number1)));
        }
        else if (operation.operator === "square") {
            console.log(chalk.red(operation.number1 ** 2));
        }
        else if (operation.operator === "cube") {
            console.log(chalk.blue(operation.number1 ** 3));
        }
        else if (operation.operator === "prime number") {
            if (operation.number1 < 2) {
                console.log("Not a Prime Number");
            }
            else {
                let prime = true;
                for (let i = 2; i < Math.sqrt(operation.number1); i++) {
                    if (operation.number1 % i === 0) {
                        prime = false;
                        break;
                    }
                }
                if (prime) {
                    console.log("It is a Prime Number");
                }
                else {
                    console.log("Not a Prime Number");
                }
            }
        }
        else if (operation.operator === "even or odd") {
            if (operation.number1 % 2 == 0) {
                console.log(chalk.inverse("It is even"));
            }
            else {
                console.log(chalk.inverse("It is odd"));
            }
        }
    });
}
async function start_again() {
    do {
        await ask_question();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press Y or N",
        });
    } while (again.restart == "y" ||
        again.restart == "Y" ||
        again.restart == "yes" ||
        again.restart == "YES");
}
async function initialize() {
    await welcome();
    await start_again();
}
initialize();
