const prompt = require ("prompt-sync") ({sigint: true})

let uI = JSON.parse(prompt("Enter an array; "))
let ctr = 4
if(uI.length >= ctr){
    console.log(uI[3]);
}else{
    console.log(uI[uI.length -1]);
}
