const e = require("cors");

let password = "Evergreen 54";

console.log(`${password} ${password.length}`);


let lowerLetters = /[a-z]/g;
let upperLetters = /[A-Z]/g;
let numbers = /[0-9]/g;

if(password.match(lowerLetters)){
}  else {
    console.log("Your password needs a lowercase letter.")
    }

if(password.match(upperLetters)){
} else {
    console.log("Your password needs an uppercase letter.");
}

if(password.match(numbers)){

} else {
    console.log("Your password needs a number.")
}

//*Checking for password length minimum and maximum*//

if((password.length < 10) || (password.length > 20)){
    console.log("Password must be between 10 and 20 characters.");
} else {
    console.log(`
                                                                                                                                                                       
 #####     ##     ####    ####   #    #   ####   #####   #####       #   ####       #        ####   #    #   ####       ######  #    #   ####   #    #   ####   #    # 
 #    #   #  #   #       #       #    #  #    #  #    #  #    #      #  #           #       #    #  ##   #  #    #      #       ##   #  #    #  #    #  #    #  #    # 
 #    #  #    #   ####    ####   #    #  #    #  #    #  #    #      #   ####       #       #    #  # #  #  #           #####   # #  #  #    #  #    #  #       ###### 
 #####   ######       #       #  # ## #  #    #  #####   #    #      #       #      #       #    #  #  # #  #  ###      #       #  # #  #    #  #    #  #  ###  #    # 
 #       #    #  #    #  #    #  ##  ##  #    #  #   #   #    #      #  #    #      #       #    #  #   ##  #    #      #       #   ##  #    #  #    #  #    #  #    # 
 #       #    #   ####    ####   #    #   ####   #    #  #####       #   ####       ######   ####   #    #   ####       ######  #    #   ####    ####    ####   #    # 
                                                                                                                                                                       
`);
}
//* Checking to see if password contains spaces*//

if(password.indexOf(' ') >= 0){
    console.log("Password cannot have spaces.")
}

