var temperatures = [-3, 14, 22, 5, -10];

temperatures.forEach(function(x){return console.log(x)})

temperatures.forEach(x => console.log(x))

temperatures.forEach(function(t){return console.log((t*9/5)+ 32)})

temperatures.forEach(t =>  console.log((t*9/5)+32))

const temperatuesFahrenheit = temperatures.map(function(n){
    return (n*9/5)+32;
})

console.log(temperatuesFahrenheit)

const temperatuesInFahrenheit = temperatures.map(x => (x*9/5)+32);

console.log(temperatuesInFahrenheit)

let belowFreezing = temperatures.filter(function(x){
    return x < 0;
})
console.log(belowFreezing)

belowFreezing = temperatures.filter(x => x<0)

console.log(belowFreezing)

