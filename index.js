const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "aname",
            message: "What is your name?",
            default: "Ryan Siverson"
        },
        {
            type: "input",
            name: "name",
            message: "What is your project name?"
        }, {
            type: "input",
            name: "email",
            message: "What is your email address?",
            default: "ryan.siverson@gmail.com"
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
            message: "What kind of license should your project have?",
            default: "MIT"

        }, {
            type: "input",
            name: "dep",
            message: "What command should be run to install dependencies?",
            default: "npm i"
        }, {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?",
            default: "node server"
        }, {
            type: "input",
            name: "github",
            message: "What is your GitHub address?",
            default: "https://github.com/rysiphoto"
        }, {
            type: "input",
            name: "linkedin",
            message: "What is your LinkedIn address?",
            default: "https://www.linkedin.com/in/ryan-siverson-695b5a32/"
        }, {
            type: "input",
            name: "screenShot",
            message: "Screenshot filename of the program working"
        }, {
            type: "input",
            name: "fileName",
            message: "What is the name of your ReadMe file?",
            default: "ReadMe.md"
        }
    ]);
}
function generateMD(answers) {
    return `
## Table of Contents
##### 1. [Project Description](#Project-Description)
##### 2. [GitHub Address](#GitHub-Address)
##### 3. [License Type](#License-Type)
##### 4. [Dependencies](#Dependencies)
##### 5. [Test Run Commands](#Test-Run-Commands)
##### 6. [Author Contact Information](#Author-Contact-Information)
---
# **${answers.name}**

### **Project Description:**
##### ${answers.desc}
---
### **GitHub Address:**
[${answers.name}](${answers.url})
---
### **License Type:**
##### ${answers.license}
![MIT License](https://img.shields.io/badge/license-MIT-green)
---
### **Dependencies**
##### ${answers.dep}
---
### **Test Run Commands**
##### ${answers.test}
---
### **Image**
<img src="${answers.screenShot}">



##### 
---
### **Author Contact Information:**
![MyFace](https://avatars3.githubusercontent.com/u/61304775?s=150&u=d99beab884a1c29674dba64712a08086272d692b&v=4)
* ${answers.aname}
* ${answers.email}
* [GitHub](${answers.github})
* [LinkedIn](${answers.linkedin})

---
---
###### © ${answers.aname} 2020
`;
}

promptUser()
    .then(function (answers) {
        const html = generateMD(answers);

        return writeFileAsync(`${answers.fileName}.md`, html);

    })
    .then(function () {
        console.log(`Successfully created ${answers.fileName}.md`);
    })
    .catch(function (err) {
        console.log(err);
    });
