console.log("what to wear exercise");

function whatToWear(temp) { //passing a temp parameter for evaluation inside the function

    if (temp > 18 || temp == 18) { //if statement temp will be equal or higher than 18 we will use summer clothes. 
        //I tried => 18 but the function fails and returns the summer statment even when we pass 17. 
        //It works with or || statment. 

        console.log(`The temperature today is likely to stay around ${temp} so you can go out in shorts and a t-shirt.`); //using template string / template literals - dymamic variables inside a string. This way we don't need to concatenate the temp with the string. 
    } else if (temp < 18) { //if it is below 18, better take a jacket
        console.log("The temperature today is below " + temp + " so jacket would be a good idea."); //using double quotes we need to concatenate the string with the value being passed into the parameter. 
    }
}

const clothesToWear = whatToWear(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

whatToWear(19); //The temperature today is likely to stay above 19 so you can go out in shorts and a t-shirt 
whatToWear(10); //The temperature today is below 10 so jacket would be a good idea