
// // fs.writeFile("ReadMe.txt",  + `\n`)

// const questions = ["What is the title of your project?", "What does your project do?", "What is your license?",
//     "Tests", "GitHub website"];


var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is the developers name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What does your project do?",
        name: "purpose"

    },
    {
        type: "input",
        message: "What is the license type?",
        name: "license"

    },
    {
        type: "input",
        message: "What is your GitHub Repo address?",
        name: "ghaddress"
    }
])

    .then(function (response) {


        console.log(`
         ${response.name}
         ${response.title}
         ${response.purpose}
         ${response.license}
         ${response.ghaddress}
         `);

        var filename = response.name.toLowerCase().split(" ").join("") + ".md";

        //(filename, whatToWrite, callback)
        fs.writeFile(filename, JSON.stringify(response, null, 4), function (err) {

            if (err) {
                return console.log(err);
            }
            //success!
            console.log(`Successfully wrote to file ${filename}`);
        });

    });
// * At least one badge
//  What is the title of your project?
// Describe what your project does: 
//   Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email


// function writeToFile("ReadMe.txt", "utf8") {
// }
// //  Table of Contents
// function init() {

// }

// init();
