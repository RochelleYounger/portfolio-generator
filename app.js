// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// console.log(process);

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log("=========================");

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// // const printProfileData = profileDataArr => console.log(profileDataArr);

// printProfileData(profileDataArgs);

/********************************************************************************/
const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(name, github);

// // const profileDataArgs = process.argv.slice(2, process.argv.length);
// // const profileDataArgs = process.argv.slice(2);

// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// //same as ...
// // const [name, github] = profileDataArgs;

// fs.writeFile("index.html", pageHTML, err => {
//     if (err) throw err;

//     console.log("Portfolio complete! Check out index.html to see the output!");
// });

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        }
    ])
    .then(answers => console.log(answers));