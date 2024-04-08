// login in as default or register as new user {done} but give default value to account {done}
// select method of cash ex: withdraw , fast cash , balance inquiry , exit {done}
// withdraw should be less than balance {done}
// fast cash should be like 1000, 2000, 5000, 10000 {done}
// ask for transaction slip for extra charges {optional}
// make transactions in register account contine and dont ask for register account and username and continue {done}
// make user ask to continue transaction from scratch or start from the begining {for register user done}
// user exit atm on exit
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let sleep = () => {
    return new Promise((res, rej) => {
        setTimeout(res, 3000);
    });
};
async function Welcome() {
    let title = chalkAnimation.rainbow(`✩░▒▓▆▅▃▂▁$$$$$ 𝐃𝐞𝐯𝐞𝐥𝐨𝐩 𝐁𝐲 𝐔𝐦𝐚𝐢𝐫 𝐀𝐥𝐢 𝐊𝐡𝐚𝐧 $$$$$▁▂▃▅▆▓▒░✩`);
    await sleep();
    title.stop();
    console.log(chalk.green(`
    
    
    / \---------------------------------, 
\_,|                                | 
   |    WELCOME TO MY ATM MACHINE   | 
   |  ,-------------------------------
   \_/______________________________/ 
   
   
   `));
}
var condition = true;
async function login() {
    console.log("Welcome to the ATM");
    let login_type = await inquirer.prompt({
        name: "Account_type",
        type: "list",
        choices: ["default", "Register"],
    });
    // code for default user in a loop with pin set as 1234
    if (login_type.Account_type == "default") {
        const defaault_username = "Admin";
        const mypin = 1234;
        let defaault_balance = 10000;
        const userpin = await inquirer.prompt({
            name: "pin",
            type: "number",
            message: "Please enter the pin", //default pin is 1234
        });
        if (userpin.pin === mypin) {
            async function def_login() {
                let Account_methods = await inquirer.prompt({
                    name: "debit",
                    type: "list",
                    choices: ["Withdraw", "Fast cash", "Balance Inquiry", "Exit"],
                    message: "Please choose one option from below to Proceed....",
                });
                if (Account_methods.debit === "Withdraw") {
                    let Account_withdraw = await inquirer.prompt({
                        name: "withdraw amount",
                        type: "number",
                        message: "Please enter your amount to Withdraw",
                    });
                    if (defaault_balance >= Account_withdraw["withdraw amount"]) {
                        defaault_balance -= Account_withdraw["withdraw amount"];
                        console.log(chalk.green(`Your Balance is => ${defaault_balance}`));
                    }
                    else {
                        console.log(chalk.red("Insuffient Cash to make transaction."));
                    }
                }
                else if (Account_methods.debit === "Fast cash") {
                    let Fast_cash = await inquirer.prompt({
                        name: "instant",
                        type: "list",
                        choices: ["500", "1000", "2000", "5000", "10000"],
                        message: "Please choose one option from below to Proceed with transaction",
                    });
                    if (defaault_balance >= Fast_cash.instant) {
                        if (Fast_cash.instant == "500") {
                            defaault_balance -= 500;
                            console.log(chalk.green(`You Balance is => ${defaault_balance})`));
                        }
                        else if (Fast_cash.instant == "1000") {
                            defaault_balance -= 1000;
                            console.log(chalk.green(`You Balance is => ${defaault_balance}`));
                        }
                        else if (Fast_cash.instant == "2000") {
                            defaault_balance -= 2000;
                            console.log(chalk.green(`You Balance is => ${defaault_balance}`));
                        }
                        else if (Fast_cash.instant == "5000") {
                            defaault_balance -= 5000;
                            console.log(chalk.green(`You Balance is => ${defaault_balance}`));
                        }
                        else if (Fast_cash.instant == "10000") {
                            defaault_balance -= 10000;
                            console.log(chalk.green(`You Balance is => ${defaault_balance}`));
                        }
                    }
                    else
                        console.log(chalk.red("Insuffient Balance"));
                }
                else if (Account_methods.debit == "Balance Inquiry") {
                    console.log(chalk.green(`Your Balance is => ${defaault_balance}`));
                }
                else if (Account_methods.debit == "Exit") {
                    console.log(chalk.blue("Thank you for using deafult account Please come again 😊"));
                    condition = false;
                }
            }
            while (condition) {
                await def_login();
            }
        }
        else {
            console.log(chalk.red("Sorry, Please enter the correct pin"));
        }
    }
    // Code for register user in a loop
    if (login_type.Account_type == "Register") {
        let Account_name = await inquirer.prompt({
            name: "name",
            type: "input",
            message: "Please, Enter Your name",
        });
        let Account_access1 = await inquirer.prompt({
            name: "PIN1",
            type: "number",
            message: "Please, Enter Your PIN",
        });
        let Account_access2 = await inquirer.prompt({
            name: "PIN2",
            type: "number",
            message: "Please, Enter Your PIN to confirm",
        });
        if (Account_access1.PIN1 == Account_access2.PIN2) {
            let Account_initial_balance = await inquirer.prompt({
                name: "initial deposit",
                type: "number",
                message: `Please, Enter your Balance to Start your transaction`,
            });
            console.log(chalk.green(`You are registered as ${Account_name.name} and your Balance is => ${Account_initial_balance["initial deposit"]}
                    Please Proceed......  `));
            async function reg_repeat() {
                let Account_methods = await inquirer.prompt({
                    name: "debit",
                    type: "list",
                    choices: ["Withdraw", "Fast cash", "Balance Inquiry", "Exit"],
                    message: "Please choose one option from below to Proceed....",
                });
                if (Account_methods.debit === "Withdraw") {
                    let Account_withdraw = await inquirer.prompt({
                        name: "withdraw amount",
                        type: "number",
                        message: "Please enter your amount to Withdrae",
                    });
                    if (Account_initial_balance["initial deposit"] >=
                        Account_withdraw["withdraw amount"]) {
                        Account_initial_balance["initial deposit"] -=
                            Account_withdraw["withdraw amount"];
                        console.log(chalk.green(`Your Balance is => ${Account_initial_balance["initial deposit"]}`));
                    }
                    else {
                        console.log(chalk.red("Insuffient Cash to make transaction."));
                    }
                }
                else if (Account_methods.debit === "Fast cash") {
                    let Fast_cash = await inquirer.prompt({
                        name: "instant",
                        type: "list",
                        choices: ["500", "1000", "2000", "5000", "10000"],
                        message: "Please choose one option from below to Proceed with transaction",
                    });
                    if (Account_initial_balance["initial deposit"] >= Fast_cash.instant) {
                        if (Fast_cash.instant == "500") {
                            Account_initial_balance["initial deposit"] -= 500;
                            console.log(chalk.green(`You Balance is => ${Account_initial_balance["initial deposit"]}`));
                        }
                        else if (Fast_cash.instant == "1000") {
                            Account_initial_balance["initial deposit"] -= 1000;
                            console.log(chalk.green(`You Balance is => ${Account_initial_balance["initial deposit"]}`));
                        }
                        else if (Fast_cash.instant == "2000") {
                            Account_initial_balance["initial deposit"] -= 2000;
                            console.log(chalk.green(`You Balance is => ${Account_initial_balance["initial deposit"]}`));
                        }
                        else if (Fast_cash.instant == "5000") {
                            Account_initial_balance["initial deposit"] -= 5000;
                            console.log(chalk.green(`You Balance is => ${Account_initial_balance["initial deposit"]}`));
                        }
                        else if (Fast_cash.instant == "10000") {
                            Account_initial_balance["initial deposit"] -= 10000;
                            console.log(chalk.green(`You Balance is => ${Account_initial_balance["initial deposit"]}`));
                        }
                    }
                    else
                        console.log(chalk.red("Insuffient Balance"));
                }
                else if (Account_methods.debit == "Balance Inquiry") {
                    console.log(chalk.blue(`Your Balance is => ${Account_initial_balance["initial deposit"]}`));
                }
                else if (Account_methods.debit == "Exit") {
                    console.log("Please come again 😊-ooo-😊");
                    condition = false;
                }
            }
            while (condition) {
                await reg_repeat();
            }
        }
        else {
            console.log(chalk.red("Sorry your PIN doesn't match and Please try again "));
        }
    }
}
async function Startover() {
    do {
        await login();
        condition = true;
        var restart = await inquirer.prompt({
            name: "again",
            type: "confirm",
            message: "Do you want to make another transaction",
            default: "true",
        });
    } while (restart.again);
    console.log(restart.again);
}
async function Initialize() {
    await Welcome();
    await Startover();
}
Initialize();
