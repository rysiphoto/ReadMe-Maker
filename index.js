const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your project name?"
        }, {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }, {
            type: "input",
            name: "url",
            message: "What is the URL for your project?"
        }, {
            type: "input",
            name: "desc",
            message: "Please enter a short description of what your project does."
        }, {
            type: "input",
            name: "license",
            message: "What kind of license should your project have?"
        }, {
            type: "input",
            name: "dep",
            message: "What command should be run to install dependencies?"
        }, {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?"
        }, {
            type: "input",
            name: "github",
            message: "What is your GitHub address?"
        }, {
            type: "input",
            name: "linkedin",
            message: "What is your LinkedIn address?"
        }
    ]);
}
function generateMD(answers) {
    return `
 
    # **${answers.name}**

    ### **Project Description:**
    #####${answers.desc}

    ### **GitHub Address:**
    ${answers.url}

    ### **License Type:**
    #####${answers.license}

    ### **Dependencies**
    #####${answers.dep}
    
    ### **Test Run Commands**
    #####${answers.test}

    ### **Author Contact Information:**
    ${answers.name}   || ${answers.email}
    ${answers.github}
    ${answers.linkedin}


   ####### Ryan Siverson 2020

`;
}

promptUser()
    .then(function (answers) {
        const html = generateMD(answers);

        return writeFileAsync("index.md", html);

    })
    .then(function () {
        console.log("successfully wrote to index.html");
    })
    .catch(function (err) {
        console.log(err);
    });
    //     console.log(`
    //      ${response.name}
    //      ${response.title}
    //      ${response.purpose}
    //      ${response.license}
    //      ${response.ghaddress}
    //      `);

    //     var filename = response.name.toLowerCase().split(" ").join("") + ".md";

    //     //(filename, whatToWrite, callback)
    //     fs.generateMD(filename, JSON.stringify(response, null, 4), function (err) {
