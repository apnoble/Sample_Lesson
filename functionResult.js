// how to calculate the area of a rectangle

// Function Declaration
function calcAreaRect(width, length) {
    let area = width * length;
    let output = "When the width of a rectangle is " + width + 
        " and the length is "+ length +" the area is "+area;
    return output;
}

// We can immediately use the result of a call - Here we are immediately logging it to the console
console.log(calcAreaRect(5, 4));

// If we forget to add the parens, it won't be called. The function definition will be logged instead
console.log(calcAreaRect)

// We can store the result of a call in a variable - This is what we will usually want to do.
let result = calcAreaRect(20, 4);
console.log(result);

// We can also store a function to a variable - this is a bit more advanced
let calculateFunc = calcAreaRect;
console.log(calculateFunc(20, 4));

