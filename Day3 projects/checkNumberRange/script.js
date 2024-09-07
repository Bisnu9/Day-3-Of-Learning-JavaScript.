// Write a program that checks if a given number is within a specified range.
// the range is 1- 100

function range(){
    let num = parseInt(prompt("Type a number"))

    if(num>=1 && num<=100){
        result = "The number is in the range"
    }else if(num>100){
        result = "The number is not in the range"
    }
    console.log(result)
}
range()