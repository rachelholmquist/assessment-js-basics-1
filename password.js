const e = require("cors");

let password = "Evergreen54";

console.log(`${password} ${password.length}`);


let characterValidate = /([a-zA-Z0-9!@#$%^&*])/;

if(password.match(characterValidate)){
    console.log("Password characters are valid");
} else{
    console.log("password characters are not valid");
    }

let length = (password.length < 10);
let maxLength = (password.length > 20);

if(`${length}` === true){
    console.log("Password must contain at least 10 characters");
}
if(`${maxLength}` === true){
    console.log("Password can not exceed 20 characters.")
}

// if(checkLowerLetters && upperLetters && numeric){
//     console.log("All characters needed for a succesful password.")
// } else {
//     console.log("no");
// }

// if (password.match(lowerLetters)){
// } else {
//     console.log("password needs lower case letters.")
// }
// if (password.match(upperLetters)){
// }  else {
//     console.log("password needs Upper case letters.");
// }
// if (password.match(numeric)){
    
// } else {
//     console.log("password needs a numeric value.");
// } 

