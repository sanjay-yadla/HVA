function addNumbers (a, b){
    return a+b;
}

function multiplyNumbers(a, b){
    const mul = a * b;
    return mul;
}

function subtractNumbers (a, b){
    let sub = a - b;
    return sub;
}

function divideNumbers (a, b){
    if (b === 0) {
        return "Divisor can't be Zero"
    }
    var div = a / b;
    return div;
}

function performArithmetic (num1, num2, operation){
    return operation(num1, num2);
}

console.log(performArithmetic(5, 3, addNumbers))
console.log(performArithmetic(5, 3, multiplyNumbers))
console.log(performArithmetic(5, 3, subtractNumbers))
console.log(performArithmetic(5, 0, divideNumbers))