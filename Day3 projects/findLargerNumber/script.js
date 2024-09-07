// Create a function that takes two numbers as input and returns the larger number.

function num(){
    let num1 = parseInt(prompt("Enter a number"))
    let num2 = parseInt(prompt("Enter different number"))

    if(num1>num2){
        result = (num1 + " Is the largest number")
    }else if(num1<num2){
        result = (num2 + " Is the largest number")
    }else{
        result = "Invalid"
    }
    console.log(result)
}
num()
