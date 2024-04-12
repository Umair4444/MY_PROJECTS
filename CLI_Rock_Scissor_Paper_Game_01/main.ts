#! /usr/bin/env node

import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

let stop = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
};

async function Welcome() {
  let title = chalkAnimation.rainbow(`     ^~^  ,                          
    ('Y') )                          
    /   \/  Let the game begin  __QQ 
   (\|||/)                     (_)_">
                              /      `);
  await stop();
  title.stop();
  console.log(
    chalk.red(`  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⣉⠹⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠇⠰⠿⠿⠂⠻⠿⢶⠀⣀⡀⠉⠙⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⣤⣶⣿⣿⣿⣿⡷⢠⡀⣿⣿⡇⠀⠀⠀⠀⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠁⠀⠀⠀⢿⣿⡟⢛⣛⡋⣰⣿⡇⣿⣿⡇⣿⣷⣦⡀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⠟⠻⣿⡿⠁⠀⠀⠀⠀⠀⢸⣿⣿⠈⢛⣁⠛⠿⠃⠻⢿⡇⣿⣿⢹⣧⠀⠀⠀⠀⠙⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿
  ⣿⠟⣉⠁⣾⣷⣬⡀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣧⣴⣦⣬⡙⠻⣷⣶⣶⣬⣁⣾⡏⠀⠀⠀⠀⠀⠘⣿⡿⢃⣾⣶⢙⣿⣿⣿⣿
  ⣏⠸⣿⣿⣦⡙⢿⣿⣦⡀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣷⣬⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠈⣴⣿⡿⣡⣾⣿⣿⣿⣿
  ⡿⢣⣌⠻⣿⣿⣦⡙⢿⣿⣦⡀⠀⠀⣀⣀⠘⠿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⣠⣾⡿⢋⣴⣿⣿⣿⣿⣿⣿
  ⣇⠻⣿⣷⣌⠻⣿⣿⣦⣙⣿⣿⣷⣄⠻⣿⣿⣷⣆⠻⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⠟⢡⣿⣿⠿⠿⢛⣛⣫⢻
  ⣿⠇⣈⠻⣿⣷⣌⣻⣿⣿⣿⣿⣿⣿⣷⣬⣿⣿⣿⣧⠙⣿⣿⣿⠟⣰⣾⣶⣤⣀⠠⣶⣿⣿⣿⣇⣀⣬⣵⣶⣾⣿⣿⣿⡿⢈
  ⣿⣄⠹⢷⣦⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⡿⢃⣾⣿⣿⣿⡇⠻⢿⣦⡍⣿⣿⣿⠿⠿⢟⣛⣛⣭⣭⣴⣾⣿
  ⣿⣿⣷⣦⡙⢿⣦⣬⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⣿⡇⣿⣿⣿⣿⣿⢇⣷⢸⣿⠇⣴⣶⣶⡄⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣦⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⢸⣿⣷⠸⣿⣿⣿⣏⣾⢇⣤⣍⣈⣩⣭⡉⣁⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣄⠙⠿⣿⣿⣿⣿⣿⣿⣿⡿⢛⣿⣦⡙⢋⣴⣿⣿⣿⣿⣿⣶⣭⣭⣙⣛⡿⢃⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠙⠻⠿⠟⢛⣩⣴⣿⣿⣿⣿⣦⣙⣿⣿⣿⡿⠿⠿⠿⠿⠛⢉⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⡀⠀⠘⠿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
  ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣤⣤⣤⣤⣤⣤⣴⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`)
  );
  // console.log(
  //   chalk.blue(`  ___                   ___
  //  (o o)                 (o o)
  // (  V  ) Rock--Paper--Scissor (  V  )
  // --m-m-------------------m-m--`)
  // );

  console.log(chalk.greenBright(`  ✩░▒▓▆▅▃▂▁𝐃𝐞𝐯𝐞𝐥𝐨𝐩 𝐛𝐲 𝐔𝐦𝐚𝐢𝐫▁▂▃▅▆▓▒░✩`));
}

let choices: any = ["Rock", "Paper", "Scissor"];

let rock = ` 
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___) `;

let paper = `
    _______
---'   ____)____
          ______)
          _______)
        _______)
---.__________)`;

let scissor = `
    _______
---'   ____)____
          ______)
        __________)
      (____)
---.__(___)`;

let vs = chalk.blue(`  

       (   (    (
      ( ) ( )  ( )
     ((_((_)( ((_)
      \\ \\ / / __|
       \\   /\\__ \\
        \\_/ |___/
            `);

let computer_win = `
░▄▀▀░▄▀▄░█▄▒▄█▒█▀▄░█▒█░▀█▀▒██▀▒█▀▄░░░█░░▒█░█░█▄░█░▄▀▀
░▀▄▄░▀▄▀░█▒▀▒█░█▀▒░▀▄█░▒█▒░█▄▄░█▀▄▒░░▀▄▀▄▀░█░█▒▀█▒▄██
`;

let user_wins = `
      ▒█▀▄░█▒░▒▄▀▄░▀▄▀▒██▀▒█▀▄░░░█░░▒█░█░█▄░█░▄▀▀
      ░█▀▒▒█▄▄░█▀█░▒█▒░█▄▄░█▀▄▒░░▀▄▀▄▀░█░█▒▀█▒▄██
`;

async function game() {
  let user = await inquirer.prompt({
    type: "list",
    choices: ["Rock", "Paper", "Scissor"],
    name: "user_choice",
    message: "User choose your weapon :",
  });

  let comp_choice = Math.floor(Math.random() * 3);

  // 1 = Rock
  // 2 = Paper
  // 3 = Scissor

  console.log(chalk.cyan(`You choose => ${user.user_choice}`));
  console.log(chalk.yellow(`Computer choose => ${choices[comp_choice]}`));

  if (user.user_choice === "Rock" && choices[comp_choice] === "Paper") {
    console.log(chalk.red(rock) + vs + chalk.green(paper));
    console.log(computer_win);
  } else if (
    user.user_choice === "Rock" &&
    choices[comp_choice] === "Scissor"
  ) {
    console.log(chalk.green(rock) + vs + chalk.red(scissor));
    console.log(user_wins);
  } else if (user.user_choice === "Paper" && choices[comp_choice] === "Rock") {
    console.log(chalk.green(paper) + vs + chalk.red(rock));
    console.log(user_wins);
  } else if (
    user.user_choice === "Paper" &&
    choices[comp_choice] === "Scissor"
  ) {
    console.log(chalk.red(paper) + vs + chalk.green(scissor));
    console.log(computer_win);
  } else if (
    user.user_choice === "Scissor" &&
    choices[comp_choice] === "Rock"
  ) {
    console.log(chalk.red(scissor) + vs + chalk.green(rock));
    console.log(computer_win);
  } else if (
    user.user_choice === "Scissor" &&
    choices[comp_choice] === "Paper"
  ) {
    console.log(chalk.green(scissor) + vs + chalk.red(paper));
    console.log(user_wins);
  } else {
    console.log(`
    ░█░▀█▀░░░█░▄▀▀░░▒▄▀▄░░░█▀▄▒█▀▄▒▄▀▄░█░░▒█
    ░█░▒█▒▒░░█▒▄██▒░░█▀█▒░▒█▄▀░█▀▄░█▀█░▀▄▀▄▀
    `);
  }
}

async function game_in_loop() {
  do {
    await game();

    var again = await inquirer.prompt({
      name: "do_again",
      type: "confirm",
      default: true,
      message: "Do you want to keep playing",
    });
  } while (again.do_again);
}

let full_game = async () => {
  await Welcome();
  await game_in_loop();
};

full_game();
