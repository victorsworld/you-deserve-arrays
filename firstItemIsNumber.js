const prompt = require ("prompt-sync") ({sigint: true})

let uI = JSON.parse(prompt("Enter an array; "));
let fIN = true;
let fINotN = false;
// let x = [Number()] 
console.log(typeof uI[0])

if(typeof uI[0] === "number")
{console.log(fIN)}
else 
{console.log(fINotN)}



