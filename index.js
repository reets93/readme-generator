const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const { generate } = require("rxjs");

// array of questions for user
// const questions = [
//     {
//         type: 'input',
//         name: 'title',
//         message: 'What is the title of your project?'
//     }
// ];

// // function to write README file
// function writeToFile() {
//     fs.writeFile('sample.md', questions, (err) =>
//         err ? console.error(err) : console.log("Success"))
// }

// // function to initialize program
// function init() {
//     inquirer
//         .prompt(questions).then((data) => {
//             writeToFile()
//         })
// }

// // function call to initialize program
// init();

//- - - - - - - - - - 


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for your project?',
        choices: ['MIT', 'Apache License 2.0', 'GNU General Publice License v3.0', 'BSD 2-Clause "Simplified" License', 'Boost Software License', 'The Unlicense', 'Mozilla Public Licese 2.0']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please outline how your project should be used:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can people contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    }
];

// function to write README file
// function writeToFile() {
//     const fileContent = `# ${data.title}`

//     fs.writeFile('sample.md', fileContent, (err) =>
//         err ? console.error(err) : console.log('Success'))
// }




// function to initialize program
function init() {
    inquirer
        .prompt(questions).then((data) => {
            console.log('answered')
            const fileContent = `# ${data.title}
            ENTER LICENSE HERE
            ## Description
            ${data.description}

            ## Table of Contents
            ENTER LINKABLE THINGS HERE

            ## Installation
            To install necessary depencies, run the following command:
            ${data.installation}

            ## Usage
            You can use this application by running " ${data.usage} "

            ## License
            This project is under the ${data.license} license.

            ## Contributing 
            ${data.contributing}

            ## Tests 
            To run tests, run the following command:
            ${data.tests}

            ## Questions
            If you have any questions about the repo, open an issue or contact directly on ${data.email}.
            To see more of my work, go to: 
            [${data.username}](https://github.com/${data.username}/)
            `

            fs.writeFile('./Sample/README.md', fileContent, (err) =>
                err ? console.error(err) : console.log('Success'))
        })
}

// function call to initialize program
init();


// switch case for badge
// function badge() { // --> how to get badge data in the right place
//     const licenseType = ${data.license}
//     switch (licenseType) {
//         case "MIT":
//             " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//             break;

//             'Apache License 2.0', 'GNU General Publice License v3.0', 'BSD 2-Clause "Simplified" License', 'Boost Software License', 'The Unlicense', 'Mozilla Public Licese 2.0']

//     }
// }