const fs = require("fs");

// modifying input data to the right format
const database = fs
    .readFileSync("./input.txt", { encoding: "UTF-8" })
    .split("\n")
    .map((str) => str.split(/-| /))
    .map((array) => array.map((str) => str.replace(":", "")))
    .map((array) => {
        let newArray = [...array];
        newArray[0] = parseInt(newArray[0]);
        newArray[1] = parseInt(newArray[1]);
        return newArray;
    });

console.log(runAllPasswords(database));

function runAllPasswords([...input]) {
    let globalCounter = 0;

    input.map((pass) => {
        globalCounter = globalCounter + checkPassword(pass);
    });
    return globalCounter;
}
function checkPassword([...password]) {
    let loc1 = password[0] - 1;
    let loc2 = password[1] - 1;
    let key = password[2];
    let text = password[3];
    let counter = 0;

    if (
        (text[loc1] === key && text[loc2] !== key) ||
        (text[loc2] === key && text[loc1] !== key)
    ) {
        counter = counter + 1;
    }
    return counter;
}
