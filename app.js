// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// console.log(process);

const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log("=========================");

    profileDataArr.forEach(profileItem => console.log(profileItem));
};
// const printProfileData = profileDataArr => console.log(profileDataArr);

printProfileData(profileDataArgs);