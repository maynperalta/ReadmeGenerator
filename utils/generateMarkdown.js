// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ### Table of Contents
  [Installation](#installation)<br/>
  [Usage](#usage)<br/>
  [License](#license)<br/>
  [Contributing](#contributing)<br/>
  [Tests](#tests)<br/>
  [Questions](#questions)

  ### Installation
  ${data.instructions}

  ### Usage
  ${data.usage}

  ### License
  ${data.license}

  ### Contributing
  ${data.contributions}

  ### Tests
  ${data.test}

  ### Questions
  If you have any questions regarding the project, feel free to reach me at <${data.email}>. You can also view my GitHub profile [HERE](https://github.com/${data.github})!

`;
}

module.exports = generateMarkdown;
