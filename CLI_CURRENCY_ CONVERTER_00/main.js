#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
let currency = {
    USD: 1, // BASE CURRENCY
    PKR: 278,
    EURO: 0.92,
    GBP: 0.79,
    SAR: 3.75,
    JPY: 151.7,
    AUD: 1.51,
    CNY: 7.23,
    INR: 83.26,
    KWD: 0.31,
};
console.log(currency);
async function converter() {
    let option = await inquirer.prompt({
        name: "user_options",
        type: "list",
        choices: ["Currency Converter", "Forex Exchange Rates", "Exit"],
        message: "What do you like to do",
    });
    if (option.user_options === "Currency Converter") {
        let user_input = await inquirer.prompt([
            {
                name: "from",
                type: "list",
                choices: [
                    "USD",
                    "PKR",
                    "EURO",
                    "GBP",
                    "SAR",
                    "JPY",
                    "AUD",
                    "CNY",
                    "INR",
                    "KWD",
                ],
                message: "Please Select the currency you want to convert from: ",
            },
            {
                name: "to",
                type: "list",
                choices: [
                    "USD",
                    "PKR",
                    "EURO",
                    "GBP",
                    "SAR",
                    "JPY",
                    "AUD",
                    "CNY",
                    "INR",
                    "KWD",
                ],
                message: "Please Select the currency you want to convert to: ",
            },
            {
                name: "amount",
                type: "number",
                message: "Please enter the amount you want to convert: ",
            },
        ]);
        let from_amount = currency[user_input.from];
        let to_amount = currency[user_input.to];
        let amount = user_input.amount;
        let base_amount = amount / from_amount;
        let converted_amount = base_amount * to_amount;
        console.log(chalk.green(`You converted ${amount} ${user_input.from} to ${user_input.to} and now your converted amount is ${converted_amount} ${user_input.to}`));
    }
    else if (option.user_options === "Forex Exchange Rates") {
        console.log(currency);
    }
    else if (option.user_options === "Exit") {
        console.log(chalk.red("Please come back"));
        condition = false;
    }
}
do {
    await converter();
    var again = await inquirer.prompt({
        name: "restart",
        type: "confirm",
        message: "If you want to continue press any key and to stop press n or N",
        default: true,
    });
} while (again.restart);
