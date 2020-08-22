// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ### Table of Contents
  ###installation-instructions
  ###usage-information
  ###license
  ###contributions
  ###tests
  ###questions/contact

  ### Installation Instructions
  ${data.instructions}

  ### Usage Information
  ${data.usage}

  ### License
  ${data.license}

  ### Contributions
  ${data.contributions}

  ### Tests
  ${data.test}

  ### Questions/Contact
  If you have any questions regarding the project, feel free to reach me at <${data.email}. You can also view my GitHub profile [HERE](https://github.com/${data.github})!

`;
}

module.exports = generateMarkdown;
