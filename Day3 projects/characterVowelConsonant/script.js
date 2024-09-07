// Implement a program that determines if a given character is a vowel or a consonant.

function character(){
    let str = prompt("Type a letter");
    if(str === "a" || str === "e" || str === "i" || str === "o" || str === "u"){
        result =str + " = is a vowel"
    }else if(str === "A" || str === "E" || str === "I" || str === "O" || str === "U"){
        result =str + " = is a vowel"
    }else{
        result = " is a consonant"
    }
    console.log(result);
 }
character()