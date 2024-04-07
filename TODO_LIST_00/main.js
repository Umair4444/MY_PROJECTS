import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// list of shopping item a person want to buy
let todo_List = ["Samsung S20 Ultra", "Airpods", "Dell Alienware"];
let condition = true;
let sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 5000);
    });
};
async function Welcome() {
    // await console.log("Welcome to Dhokabaaz Store");
    let title = chalkAnimation.rainbow("Welcome to Dhokabaaz Store", 2500);
    await sleep();
    title.stop();
    console.log(chalk.bgWhite.black("Here you will only wish you had these items"));
    // condition = false;
}
async function my_Todo() {
    while (condition) {
        await todo();
    }
}
async function program() {
    await Welcome();
    await my_Todo();
}
async function todo() {
    let todo_Options = await inquirer.prompt({
        name: "Options",
        type: "list",
        message: "Please select an Otion from below : ",
        choices: ["Add", "Delete", "Update", "View", "Exit"],
    });
    if (todo_Options.Options === "Add") {
        await add_Task();
    }
    else if (todo_Options.Options === "View") {
        await view_Task();
    }
    else if (todo_Options.Options === "Exit") {
        console.log("Please come back for more shopping");
        condition = false;
    }
    else if (todo_Options.Options === "Delete") {
        await delete_Task();
    }
    if (todo_Options.Options === "Update") {
        await update_Task();
    }
}
async function add_Task() {
    let Task = await inquirer.prompt({
        name: "Add",
        type: "input",
        // default: todo_List.filter(Boolean),
        message: "Please Enter the Item you want to add in your cart : ",
    });
    if (Task.Add.trim() !== "") {
        todo_List.push(Task.Add);
    }
    console.log(chalk.green(`You added =>  ${Task.Add}`));
    //   console.log(todo_List);
}
async function view_Task() {
    await console.log(`My bucket list is : `);
    // foreach loop will iterate elements in your loop and we can perform any action on it
    todo_List.forEach((value, index) => {
        console.log(chalk.yellow(`Your list contain item # ${index + 1} : ${value}`));
        // console.log(`${todo_List}`);       // shows in a horizontal line
        // console.log(todo_List);            // shows in a array
    });
}
// will ask for index no
// async function delete_Task() {
//   await view_Task();
//   let taskno = await inquirer.prompt({
//     name: "index",
//     type: "number",
//     message: "Enter the no of task you want to delete",
//   });
//   //   taskno.index should be decreament by minus 1
//   let deleted = todo_List.splice(taskno.index - 1, 1);
// }
// will show value to delete
async function delete_Task() {
    await view_Task();
    let taskno = await inquirer.prompt({
        name: "index",
        type: "list",
        choices: todo_List,
        message: "Select the item you want to delete from your cart :",
    });
    let indexno = todo_List.indexOf(taskno.index);
    if (indexno >= 0) {
        todo_List.splice(indexno, 1);
        console.log(chalk.red(`You just deleted => ${taskno.index}`));
    }
}
async function update_Task() {
    let Updated = await inquirer.prompt({
        name: "todo",
        type: "list",
        message: "`Select the item to update`",
        choices: todo_List.map((val) => val),
    });
    let Task = await inquirer.prompt({
        name: "Add",
        type: "input",
        message: "Please Enter the Item you want to add in your cart : ",
    });
    if (Task.Add.trim() !== "") {
        let updated_todo = todo_List.filter((val) => val !== Updated.todo);
        todo_List = [...updated_todo, Task.Add]; /// put ... spread operator before Task.add and it will treat string into a array
        console.log(chalk.red(`You deleted ${Updated.todo}`));
        console.log(chalk.green(`and You updated it with =>  ${Task.Add}`));
    }
}
program();
