const prompt = require ("prompt-sync") ({sigint: true})

let uI = JSON.parse(prompt("Enter an array; "));

let atL10 = true;
let lT10 = false;

if(uI.length >= 10){
    console.log(atL10)
} else{console.log(lT10)}
