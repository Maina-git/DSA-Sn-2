function greet(name){
    console.log(`hello ${name}`);
}

greet("john");
greet("David");

function addNumbers(a, b){
    let sum = a + b;
    console.log(sum)
}

addNumbers(20, 40);

function squareNum(n){
    let sqr = n*n;
    console.log(sqr)
}

squareNum(10)

function display(){
    console.log("This will be  excecuted")
return "Returning from function"
console.log("This will not  be  excecuted")
}

let message = display();
console.log(message)

// library functions 
let squareRoot = Math.sqrt(4);
console.log(`The  squareRoot of four is ${squareRoot}`);
let power = Math.pow(2, 3);
console.log(` 2 to the  poewr of  3 is ${power}`);
let band = "Iron Maiden";
let bandUpper = band.toUpperCase();
console.log(`Favourite Band: ${bandUpper}`)

//example 
function myMath(n){
   let square = Math.sqrt(n);
 if(square %2 !== 0){
    console.log("this  is  an odd squareroot")
 }
 console.log(square);
}
myMath(25);








