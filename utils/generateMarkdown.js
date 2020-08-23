// function to generate markdown for README
function generateMarkdown({license, title, description, instructions, usage, contributions, test, email, github}) {
  let licenseURL = '';
  switch (license) {
    case 'Apache 2.0':
      licenseURL = 'apache-2.0';
      break;
    case 'MIT':
      licenseURL = 'MIT';
      break;
    case 'GPL 3.0':
      licenseURL = 'GPL-3.0';
      break;
    case 'EPL 1.0':
      licenseURL = 'EPL-1.0';
      break;
    case 'ISC':
      licenseURL = 'ISC';
    default:
      break;
  }

  return `# ${title}
  [![License](https://img.shields.io/badge/License-${encodeURI(license)}-blue.svg)](https://opensource.org/licenses/${licenseURL})
  ## Description
  ${description}
  <br/>

  ## Table of Contents
  [**Installation**](#installation)<br/>
  [**Usage**](#usage)<br/>
  [**License**](#license)<br/>
  [**Contributing**](#contributing)<br/>
  [**Tests**](#tests)<br/>
  [**Questions**](#questions)
  <br/>

  ## Installation
  ${instructions}
  <br/>

  ## Usage
  ${usage}
  <br/>

  ## License
  This project is licensed under ${license}<br/>
  License information can be found [here](https://opensource.org/licenses/${licenseURL}).
  <br/>

  ## Contributing
  ${contributions}
  <br/>

  ## Tests
  ${test}
  <br/>

  ## Questions
  If you have any questions regarding the project, feel free to reach out to the contributors below: <br/>
  <${email}> <br/>
  [GitHub profile](https://github.com/${github})

`;
}

module.exports = generateMarkdown;
