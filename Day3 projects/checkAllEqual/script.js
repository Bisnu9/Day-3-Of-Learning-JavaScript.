// Create a function that takes three numbers as input and determines if all three numbers are equal.

function myFunction(){
    let num1 = parseInt(prompt("Type a number"))
    let num2 = parseInt(prompt("Type a number"))
    let num3 = parseInt(prompt("Type a number"))
   
    if(num1 === num2 && num2 === num3 && num3 === num1){
        result = num1 + " , " + num2 + " , " + num3 + " , " + " are equal numbers"
    }else{
        result = num1 + " , " + num2 + " , " + num3 + " , " + " are not equal numbers"
    }
    console.log(result)
}
myFunction();