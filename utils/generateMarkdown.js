// function to generate markdown for README
function generateMarkdown(data) {
  let licenseURL = '';
  switch (data.license) {
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

  return `# ${data.title}
  [![License](https://img.shields.io/badge/License-${encodeURI(data.license)}-blue.svg)](https://opensource.org/licenses/${licenseURL})
  ## Description
  ${data.description}

  ### Table of Contents
  [**Installation**](#installation)<br/>
  [**Usage**](#usage)<br/>
  [**License**](#license)<br/>
  [**Contributing**](#contributing)<br/>
  [**Tests**](#tests)<br/>
  [**Questions**](#questions)

  ### Installation
  ${data.instructions}

  ### Usage
  ${data.usage}

  ### License
  This project is licensed under ${data.license}<br/>
  License information can be found [here](https://opensource.org/licenses/${licenseURL}).

  ### Contributing
  ${data.contributions}

  ### Tests
  ${data.test}

  ### Questions
  If you have any questions regarding the project, feel free to reach out to the contributors below: <br/>
  <${data.email}> <br/>
  [GitHub profile](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
