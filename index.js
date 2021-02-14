//NPM Modules
const jest = require("jest");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//Constructors
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

//Global Variables
const Team = [];

//Inquirer Prompt Questions
function intialQuestions(answers) {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "list",
            name: "position",
            message: "What is your position?",
            choices: ["Engineer", "Intern", "Manager"]
        }
    ]).then(function ({position}) {
        if (position === "Manager") {
            return inquirer.prompt([
                    {
                        type: "input",
                        name: "office",
                        message: "What is your office number?"
                    }
            ])
        }
        else if (position === "Engineer") {
            return inquirer.prompt([        
                {
                    type: "input",
                    name: "github",
                    message: "What is your GitHub profile name?"
                }
            ])
        }
        else if (position === "Intern") {
            return inquirer.prompt([{
                type: "input",
                name: "school",
                message: "What school do you attend?"

            }
            ])       
        }         
    })
}



intialQuestions();