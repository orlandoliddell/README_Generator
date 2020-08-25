var inquirer = require("inquirer");
var fs = require("fs");
var path = require("path");
var generateMarkDown = require("./utils/generateMarkdown")

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
    message:"What is your usage?" ,
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

]).then(answers => {
    console.log(answers);

    fs.writeFile("README.md", readme, err => {
        if (err) {
            return console.log(err)
        }
    })
})