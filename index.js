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
            name: "role",
            message: "What is your role here?",
            choices: ["Engineer", "Intern", "Manager"]
        }
    ]).then(function ({role}) {
        if (role === "Manager") {
            return inquirer.prompt([
                    {
                        type: "input",
                        name: "office",
                        message: "What is your office number?"
                    }
            ])
        }
        else if (role === "Engineer") {
            return inquirer.prompt([        
                {
                    type: "input",
                    name: "github",
                    message: "What is your GitHub profile name?"
                }
            ])
        }
        else if (role === "Intern") {
            return inquirer.prompt([{
                type: "input",
                name: "school",
                message: "What school do you attend?"

            }
            ])       
        }         
    }).catch(function(err){
        console.log("Error Detected!");
        console.log(err);
    });
};

function htmlFile() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile Page</title>
    </head>
    <body>
        <nav class="navbar navbar-dark"><span>Team Profile</span></nav>

        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/members.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

function startApp(){
intialQuestions();
htmlFile();
};

startApp();