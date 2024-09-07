// Implement a program that checks if a given character is an uppercase letter.
function letter(){
    let character = prompt("Type a character")
     
     if(!isNaN(character)){
        result = ("Invalid character")
    }
    else if(character === character.toUpperCase()){
        result = ("This letter is in uppercase")
    }
    else if(character === character.toLocaleLowerCase()){
        result = ("This letter is in lowercase")
    }
    console.log(result);
}
letter();