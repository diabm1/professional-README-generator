//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const readme = "README.md";
const generateMarkdown = require("./utils/generateMarkdown");
//Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a description of your project: ",
    name: "description",
  },
  {
    type: "input",
    message:
      "What are the installation instructions for this project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions on how to use your project:",
    name: "usage",
  },
  {
    type: "input",
    message: "Who are the contributors for this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What are the testing instructions for this project?",
    name: "test",
  },
  {
    type: "checkbox",
    message: "Please select a license for this project:",
    choices: [
      "Apache_License_2.0",
      "Boost_Software_License 1.0",
      "MIT",
      "ISC",
      "GNU_GPLv3",
      "GNU_AGPLv3",
      "GNU_LGPLv3",
      "Mozilla_Public_License_2.0",
      "The_Unlicense",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "gitName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

//Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Success! Your README.md file has been generated");
    }
  });
}

//Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userdata) => writeToFile(readme, userdata));
}

// Function call to initialize app
init();
