// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
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
  License information can be found [here](https://opensource.org/licenses/${data.license}).

  ### Contributing
  ${data.contributions}

  ### Tests
  ${data.test}

  ### Questions
  If you have any questions regarding the project, feel free to reach out to the contributors below: <br/>
  <${data.email}> [GitHub profile](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
