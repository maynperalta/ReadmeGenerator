// array of questions for user
var inquirer = require('inquirer');
var fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
const questions = [
    {   message : "What is the title of this project?",
        type : "input",
        name : "title"
    },
    {
        message : "Briefly describe the project.",
        type : "input",
        name : "description"
    },
    {
        message : "What are the installation instructions?",
        type : "input",
        name : "instructions"
    },
    {
        message : "How can this project be used?",
        type : "input",
        name : "usage"
    },
    {
        message : "What are the contributing guidelines?",
        type : "input",
        name : "contributions"
    },
    {
        message : "What is the licensing of this project?",
        type : "list",
        choices : ["MIT", "GPL 3.0", "EPL 1.0", "ISC", "Apache 2.0"],
        name : "license"
    },
    {
        message : "What are the test instructions?",
        type : "input",
        name : "test"
    },
    {
        message : "What is your GitHub username?",
        type : "input",
        name : "github"
    },
    {
        message : "What is your email address?",
        type : "input",
        name : "email"
    }


];
inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers)

        
        writeToFile("README.md", generateMarkdown(answers))
    })

// function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
}