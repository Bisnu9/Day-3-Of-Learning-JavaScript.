// Write a program that checks if a given number is positive, negative, or zero.

function numbers(){
    let num = parseInt(prompt("type a number"))
    if (num > 0 ){
        result = "The number is Positive"
    } else if(num < 0){
        result = "The number is Negative"
    } else if(num === 0){
        result = "Zero"
    } else{
        result = "Invalid"
    }
    console.log(result)
}
numbers()

