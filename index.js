// array of questions for user
var inquirer = require('inquirer');
var fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');
const questions = [
    {
        message : "Briefly describe the project.",
        type : "input",
        name : "description"
    },
    {   message : "What is the title of this project?",
        type : "input",
        name : "title"
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
        choices : ["MIT", "GPL-3.0", "EPL-1.0", "ISC", "Apache-2.0"],
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

// function to initialize program
function init() {

}

// function call to initialize program
init();

//

//Apache 2.0 License
//License
//[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

//The MIT License
//License: MIT
//[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

//ISC License (ISC)
//License: ICL
//[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

//GNU GPL v3
//License: GPL v3
//[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

//Eclipse Public License 1.0
//License
//[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)