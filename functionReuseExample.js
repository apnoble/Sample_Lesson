// Say I wanted to find print out to the messages for three different sets of length and width values

// length = 5, width = 5, area = ?
// length = 6, width = 6, area = ?
// length = 7, width = 7, area = ?

// If I didn't use a method I would write

// ************* NO FUNCTION USED - around 21 lines of code ***************

let width = 5;
let length = 5;
let area = width * length;
let output = "When the width of a rectangle is " + width + 
    " and the length is "+ length +" the area is "+area;
console.log(output);

width = 6;
length = 6;
area = width * length;
output = "When the width of a rectangle is " + width + 
" and the length is "+ length +" the area is "+area;

console.log(output);

width = 7;
length = 7;
area = width * length;
output = "When the width of a rectangle is " + width + 
" and the length is "+ length +" the area is "+area;

console.log(output);

// ********** WITH A FUNCTION - around 9 lines 
function calcAreaRect(width, length) {
    let area = width * length;
    let output = "When the width of a rectangle is " + width + 
        " and the length is "+ length +" the area is "+area;
    return output;
}

console.log(calcAreaRect(5, 5));
console.log(calcAreaRect(6, 6));
console.log(calcAreaRect(7, 7));