// Implement a program that determines if a given year is a leap year.
function myFunction(){
    let year = parseInt(prompt("Type a year"))

    if(year % 4 === 0){
        result = "It is a leap year"
    }else if(year % 400 === 0){
        result = "It is not a leap year"
    }else if (year % 100 == 0){
        result = "It is a leap year"
    }else{
        result = "Not a leap year"
    }
    console.log(result)
}
myFunction();