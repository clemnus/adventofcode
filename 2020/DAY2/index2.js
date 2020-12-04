const fs = require("fs");

const passwords = readFileLines("./input.txt").map(parsePassword);
console.log(countValidPasswords(passwords));

function readFileLines(path) {
    return fs.readFileSync(path, { encoding: "UTF-8" }).split("\n");
}
function parsePassword(line) {
    const [, loc1, loc2, key, text] = line.match(/(\d+)-(\d+) (\w): (\w+)/);
    return {
        loc1: parseInt(loc1) - 1,
        loc2: parseInt(loc2) - 1,
        key,
        text,
    };
}
function countValidPasswords(passwords) {
    let counter = 0;
    passwords.forEach((password) => {
        if (isValid(password)) counter++;
    });
    return counter;
}
function isValid({ loc1, loc2, key, text }) {
    return (
        (text[loc1] === key && text[loc2] !== key) ||
        (text[loc2] === key && text[loc1] !== key)
    );
}
