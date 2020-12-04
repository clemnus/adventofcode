const fs = require("fs");

// modifying input data to the right format
const database = readFileLines("./input.txt")
    .map((line) => line.split(/-| /))
    .map((password) => password.flatMap((str) => str.replace(":", "")))
    .map((array) => ({
        loc1: parseInt(array[0]) - 1,
        loc2: parseInt(array[1]) - 1,
        key: array[2],
        text: array[3],
    }));

console.log(countValidPasswords(database));

function readFileLines(path) {
    return fs.readFileSync(path, { encoding: "UTF-8" }).split("\n");
}
function countValidPasswords(passwords) {
    let globalCounter = 0;

    passwords.forEach((password) => {
        globalCounter = globalCounter + checkPassword(password);
    });
    return globalCounter;
}
function checkPassword({ loc1, loc2, key, text }) {
    let counter = 0;

    if (
        (text[loc1] === key && text[loc2] !== key) ||
        (text[loc2] === key && text[loc1] !== key)
    ) {
        counter = counter + 1;
    }
    return counter;
}
