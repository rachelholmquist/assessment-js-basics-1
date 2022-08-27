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

if(`${length}` === true || `${maxLength}` === true){
    console.log("Password must be between 10 and 20 characters.");
} else {
    console.log("password has correct amount of characters.");
}


