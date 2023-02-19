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
        choices: ['MIT', 'Apache License 2.0',, 'BSD 2-Clause', 'Boost Software License', 'The Unlicense', 'Mozilla Public License 2.0']
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
            const licenseType = data.license
            console.log('answered')
const fileContent = `# ${data.title}

${badge(data)}

## Description

${data.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To install necessary depencies, run the following command:
> ${data.installation}


## Usage

You can use this application by running
> ${data.usage}


## License

This project is under the **${data.license} license**.


## Contributing 

${data.contributing}


## Tests 

To run tests, run the following command:
${data.tests}


## Questions

If you have any questions about the repo, open an issue or contact directly on ${data.email}.
To see more of my work, go to: 
[${data.username}](https://github.com/${data.username}/)`

            fs.writeFile('./Sample/README.md', fileContent, (err) =>
                err ? console.error(err) : console.log('Success'))
        })
}

// function call to initialize program
init();


// switch case for badge
function badge(data) { // --> how to get badge data displaying and not undefined
    const licenseType = data.license
    if (licenseType == "MIT") {
        return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (licenseType == "Apache License 2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (licenseType == "BSD 2-Clause"){
        return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    } else if (licenseType == "Boost Software License"){
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    } else if (licenseType == "the Unlicense") {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    } else if (licenseType == "Mozilla Public License 2.0") {
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }

// switch (licenseType) {
//         case "MIT":
//             // MIT();
//             `monkey`
//             break;           
//         case "Apache License 2.0":
//             apache();   
//             break;
//         case "BSD 2-Clause":
//             bsd();
//             break;
//         case "Boost Software License":
//             boost();
//             break;
//         case "The Unlicense":
//             unlicense();
//             break;
//         case "Mozilla Public License 2.0":
//             mozilla();
//             break;
// }
}

// function MIT() {
//     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
// }

// function apache(){
//     return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
// }

// function bsd() {
//     return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
// }

// function boost(){
//     return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
// }

// function unlicense(){
//     return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
// }

// function mozilla(){
//     return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
// }