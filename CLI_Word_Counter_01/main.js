#! /usr/bin/env node
import inquirer from "inquirer";
let user_paragraph = await inquirer.prompt({
    name: "paragraph",
    type: "input",
    message: "Write your paraghaph here =>> ",
});
function word_counter(user_input) {
    //   const inputByUSer = user_input.toString;
    let word_length = user_input.replace(/\s+/gi, " ").trim();
    console.log(word_length);
    // counts words
    console.log(`Total words are =>  ${word_length.split(" ").length}`);
    // counts characters
    console.log(`Total characters are => ${word_length.replace(/\s+/gi, "").trim().length}`);
}
await word_counter(user_paragraph.paragraph);
