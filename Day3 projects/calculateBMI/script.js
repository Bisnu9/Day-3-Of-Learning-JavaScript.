function myFunction(){
    let weight = parseInt(prompt("Enter your weight in kg"))
    let height = parseInt(prompt("Enter your height in cm"))

    let bmi = weight / ((height * height) 
    / 10000);

    if(bmi<18.5){
        result = "underweight"
    }else if(bmi<25){
        result = "Normal weight"
    }else if(bmi<30){
        result = "overweight"
    }else if(bmi>30){
        result = "obese"
    }
    console.log(result)
}
myFunction()
