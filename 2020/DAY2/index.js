const fs = require("fs");

// modifying input data to the right format
const input1 = fs.readFileSync("./input.txt", { encoding: "UTF-8" }).split("\n");
const input2 = input1.map(str => str.split(/-| /));
const input3 = input2.map(array => array.map(
    str => str.replace(":","")
    ));
const database = input3.map(array => {
   let newArray = [...array];
   newArray[0] = parseInt(newArray[0]);
   newArray[1] = parseInt(newArray[1]);
   return newArray;
})

// function to check 1 password
let checkPassword = ([...password]) => {
    let counter=0;
    let min = password[0];
    let max = password[1];
    let key = password[2];
    let text = password[3];

    [...text].forEach(l => {
        if(l === key) {counter = counter + 1}
    });

    if(!(counter>=min && counter <= max)) {return 0} else {return 1};
}

// function to check all passwords and count 
let runAllPasswords = ([...input]) => {
    let globalCounter=0;

    input.map(pass => {
        globalCounter = globalCounter + checkPassword(pass);
    })
    return globalCounter;
}

console.log(runAllPasswords(database));









