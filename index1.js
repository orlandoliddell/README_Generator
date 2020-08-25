var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {type:"input" ,
    message:"What is your title?",
    name:"title"},
    
    {type:"input" ,
    message:"What is your description?" ,
    name:"description"},
    
    {type:"input" ,
    message:"How do you install this?" ,
    name:"installation",
    default: "npm i"},
    
    {type:"input" ,
    message:"What does the user need to know about this repo??" ,
    name:"usage"},
   
    {type:"input" ,
    message:"What are you contributing?" ,
    name:"contribution"},
    
    {type:"input" ,
    message:"What are your instructions?" ,
    name:"instructions"},
    
    {type:"list" ,
    message:"What is your license?" ,
    name:"license",
    choices:["MIT", "APACHE", "GPL", "None"]},
    
    {type:"input" ,
    message:"What is your username?" ,
    name:"username"},
    
    {type:"input" ,
    message:"What is your email?" ,
    name:"email"},
    
    {type:"input" ,
    message:"How would a user test?" ,
    name:"test",
    default:"npm test"}

]).then(data => {
    console.log(data);
     
    var readme = `
# ${data.title}

## Description
${data.description}
    
## Table of Contents

* [Instalation](#instalation)

* [License](#License)

* [Usage](#Usage)

* [Contributing](#Contributing)

* [Tests](#Tests)

* [Questions](#Questions)


## Instalation
To install, run -> ${data.installation}

## License
![badge](https://img.shields.io/badge/LICENSE-${data.license}-TEAL)

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
Direct all questions to ${data.username} at ${data.email}
    `

    fs.writeFile("README.md", readme, err => {
        if (err) {
            return console.log(err)
        }
    })
})