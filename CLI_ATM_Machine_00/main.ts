// ATM MACHINE STEPS
// 1. REGISTER A USER IN ATM WITH ID AND CASH
// 2. CREATE A WITHDRAW SYSTEM
// 3. CREATE FASH CASH SYSTEM
// 4. WITHDRAW AMOUNT IS DEDUCTED FROM BALANCE
// 5. BALANCE INQUIRY
// 6. IF BALANCE IS LESS THAN WITHDRAW SHOWS INSUFFICIENT
// 7. CHANGE PIN

import inquirer from "inquirer";

let mypin: number = 1234;

async function ATM() {
  let atm_user = await inquirer.prompt([
    {
      type: "number",
      name: "pin",
      message: "Enter Your Pin To Enter",
    },

    {
      type: "input",
      name: "user_name",
      message: "Please Enter Your Name",
    },
    {
      type: "number",
      name: "deposit",
      message: "Please enter your starting balance",
    },
  ]);

  console.log(atm_user.user_name);
  let mybalance: number = atm_user.deposit;
  console.log(mybalance);

  if (mypin === atm_user.pin) {
    console.log(`Welcome ${atm_user.user_name}`);

    let atm_operation = await inquirer.prompt({
      type: "list",
      choices: ["Balance", "Withdraw", "exit"],
      name: "operation",
      message: "How can I help you",
    });
    if (atm_operation.operation == "Withdraw") {
      let cashout = await inquirer.prompt({
        name: "amountout",
        type: "number",
        message: "How much you like to withdraw",
      });

      if (mybalance >= cashout.amountout) {
        mybalance -= cashout.amountout;
        console.log(`Your remaining balance is ${mybalance}`);
      } else if (mybalance < cashout.amountout) {
        console.log("Insufficient Funds");
      }
    } else if (atm_operation.operation == "Balance") {
      console.log(`Your balance is ${mybalance}`);
    } else if (atm_operation.operation === "exit") {
      console.log("Thank you for Using me. Please come back");
    }
  } else {
    console.log("Invalid Pin");
  }
}

async function initializer() {
  await ATM();
}

initializer();
