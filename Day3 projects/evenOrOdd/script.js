// Create a function that takes a number as input and returns "Even" if the number is even, "Odd" if the number is odd.

function myFunction(){
    let num = parseInt(prompt("Type a number"))
       
    if(num % 2 === 0){
        result = "Even"
    }else {
        result = "odd"
    }
    console.log(result)
}
 
myFunction();