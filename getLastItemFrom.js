const prompt = require ("prompt-sync") ({sigint: true})

let uI = JSON.parse(prompt("Enter an array; "))
console.log(uI);
console.log(uI[uI.length -1]);