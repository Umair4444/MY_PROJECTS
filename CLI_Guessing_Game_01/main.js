#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let stop = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
};
async function Welcome() {
    let title = chalkAnimation.rainbow(`   ^~^  ,                          
  ('Y') )                          
  /   \/  Let the game begin  __QQ 
 (\|||/)                     (_)_">
                            /      `);
    await stop();
    title.stop();
    console.log(chalk.blue(`  ___                   ___  
 (o o)                 (o o) 
(  V  ) Guessing Game (  V  )
--m-m-------------------m-m--`));
    console.log(chalk.greenBright(`✩░▒▓▆▅▃▂▁𝐃𝐞𝐯𝐞𝐥𝐨𝐩 𝐛𝐲 𝐔𝐦𝐚𝐢𝐫▁▂▃▅▆▓▒░✩`));
}
async function game() {
    let user = await inquirer
        .prompt({
        type: "number",
        name: "my_input",
        message: "Enter your Number between 1-6: ",
    })
        .then((user) => {
        let random_number = Math.ceil(Math.random() * 6);
        if (user.my_input === random_number) {
            console.log(chalk.green(`You Guess Right Number that is ${user.my_input}`));
        }
        else {
            console.log(chalk.red(`Your Answer is Wrong your guess is ${user.my_input} and computer was thinking ${random_number}`));
        }
    });
}
async function game_in_loop() {
    do {
        await game();
        var again = await inquirer.prompt({
            name: "do_again",
            type: "input",
            message: "Do you want to keep playing",
        });
    } while (again.do_again === "Y" ||
        again.do_again === "Yes" ||
        again.do_again === "y" ||
        again.do_again === "yes");
}
let full_game = async () => {
    await Welcome();
    await game_in_loop();
};
full_game();
