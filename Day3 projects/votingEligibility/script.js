// Write a program that checks if a person is eligible to vote (assuming the voting age is 18).

function check(){
    let age = parseInt(prompt("Type your age"))

    if (age >= 18){
        result = "You are eligible to vote"
    }else if(age < 18){
        result = "You are not eligible to vote"
    }else{
        result = "Invalid"
    }
    console.log(result)
}
 check();



