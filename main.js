import inquirer from "inquirer";
let todos = []; //Shopper []
let condition = true;
while (condition) {
    let todoquestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what would you like to add in your todos?"
        },
        {
            name: 'secondQuestion',
            type: "confirm", //When type is confirm answer is in yes or no
            message: "Would you like to add more in your todos?",
            default: "true"
        }
    ]);
    todos.push(todoquestions.firstQuestion);
    console.log(todos);
    //The loop is running on the base of this variable condition
    condition = todoquestions.secondQuestion;
}
