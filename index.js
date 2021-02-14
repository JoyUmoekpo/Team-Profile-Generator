//Jest and Inquirer
const jest = require("jest");
const inquirer = require("inquirer");

//Requiring other files
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

//Inquirer Prompt Questions
function questions(answers) {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "list",
            name: "position",
            message: "What is your position?",
            choices: ["Engineer", "Intern", "Manager"]
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID number?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub profile name?"
        },
        {
            type: "input",
            name: "office",
            message: "What is your office number?"
        }
    ]).then(function (response) {
        console.log(response);
    }
    )
}

questions();