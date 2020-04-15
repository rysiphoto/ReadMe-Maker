const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "aname",
            message: "What is your name?"
        },
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
            message: "What is the GitHub URL for your project?"
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
##Table of Contents
#####1. [Project Description](#description)
#####2. [GitHub Address](#GitHub)
#####3. [License Type](#license)
#####4. [Dependencies](#dep)
#####5. [Test Run Commands](#test)
#####6. [Author Contact Information](#author)

#**${answers.name}**

###**Project Description:** {#description}
#####${answers.desc}

###**GitHub Address:** {#GitHub}
[${answers.name}](${answers.url})

###**License Type:** {#license}
#####${answers.license}

###**Dependencies** {#dep}
#####${answers.dep}
    
###**Test Run Commands** {#test}
#####${answers.test}

###**Author Contact Information:** {#author}
* ${answers.aname}
* ${answers.email}
* [GitHub](${answers.github})
* [LinkedIn](${answers.linkedin})


######© ${answers.aname} 2020

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
