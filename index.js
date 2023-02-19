const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
        choices: ['MIT', 'Apache License 2.0', 'BSD 2-Clause', 'Boost Software License', 'Mozilla Public License 2.0']
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

// function to initialize program
function init() {
    inquirer
        .prompt(questions).then((data) => {
            const licenseType = data.license
// structure of README file
            const fileContent = generateMarkdown(data)

// write the data to the README file 
            fs.writeFile('./Sample/README.md', fileContent, (err) =>
                err ? console.error(err) : console.log('README generated.'))
        })
}

// function call to initialize program
init();