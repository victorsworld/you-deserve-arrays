const prompt = require ("prompt-sync") ({sigint: true})

let uI = JSON.parse(prompt("Enter an array; "));
let third = uI[2]

if(typeof third === "string"){
    console.log(uI[1].charAt(1))
}else{console.log("error")}