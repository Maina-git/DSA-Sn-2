const finalText = "Using the  calculator)"

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    if(b === 0){
        return "Error: Division by zero is not allowed.";
    }
    return a/b;
}

function calculate(operation, a, b){
    switch(operation){
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return "Error: Invalid operation.";
    }
}

a = 10;

let output_a = a+5;
let output_b = calculate("subtract", 0, 5);

function comparison(y, z){
    if(output_a > output_b){
        return "Output A is greater than Output B";
    } else if(output_a < output_b){
        return "Output A is less than Output B";
    } else {
        return "Output A is equal to Output B";
    }
}

comparison_result = comparison(output_a, output_b);
console.log(comparison_result);

if (comparison_result == a && compariron_result < a){
    console.log("Comparison result is equal to a");
}else{
    console.log("tjis is  the  last of Me");
}



