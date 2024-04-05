#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please Guess a between 1 - 10: ",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congretulations! You Gussed Write Number");
}
else {
    console.log("You Gussed Wrong Number");
}
console.log(answer);
