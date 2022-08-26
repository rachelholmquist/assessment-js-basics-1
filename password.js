let password = "Evergreen73";

console.log(`${password} ${password.length}`);

let lowerLetters = /[a-z]/g;
let upperLetters = /[A-Z]/g;
let numeric = /[0-9]/g;

if(password.length < 10){
    console.log("password must be at least 10 characters");
}
if(password.length > 20){
    console.log("password must be less than 20 characters");
}
if (password.match(lowerLetters) && password.match(upperLetters) && password.match(numeric)){
    console.log("password is valid");
} else {
    console.log("password is invalid");
}