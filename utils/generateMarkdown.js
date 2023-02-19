// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  [${data.username}](https://github.com/${data.username}/)
`;
}

// if/else for retrieving license badge 
function badge(data) {
  const licenseType = data.license
  if (licenseType == "MIT") {
      return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseType == "Apache License 2.0") {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType == "BSD 2-Clause") {
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (licenseType == "Boost Software License") {
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (licenseType == "Mozilla Public License 2.0") {
      return `[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}


module.exports = generateMarkdown;
