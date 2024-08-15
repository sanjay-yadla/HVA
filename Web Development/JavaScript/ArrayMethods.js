const numbers = [1,2,3,4,5];

numbers.forEach(function(x){
    console.log(x)
})

numbers.forEach(function(y){
    console.log(2*y);
})

var squaredNumbers = numbers.map(function(x){
    return x**2;
})

console.log(squaredNumbers)

var squaredNumbers = numbers.map(x => x*x);
console.log(squaredNumbers)

var evenNumbers = numbers.filter(function(x){
    return x%2 === 0;
})
console.log(evenNumbers);

var evenNumbers = numbers.filter(x=> x%2===0);
console.log(evenNumbers)

console.log(typeof(squaredNumbers))