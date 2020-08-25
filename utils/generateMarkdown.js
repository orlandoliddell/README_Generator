// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![badge](https://img.shields.io/badge/LICENSE-${data.license}-TEAL)

##Description
${data.description}


`;
}

module.exports = generateMarkdown;
