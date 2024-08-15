var fruits = ['apple', 'banana', 'cherry', 'date'];

fruits.forEach(function(x){
    console.log(x.toUpperCase())
})

fruits.forEach(x => console.log(x.toUpperCase()))

var totalCharacters = 0;
fruits.forEach(function(x){
    totalCharacters += 1;
})

console.log(totalCharacters);

let reversedFruits = fruits.map(function(n){
    return n.split('').reverse().join("")
})
console.log(reversedFruits)

reversedFruits = fruits.map(x=> x.split('').reverse().join())
console.log(reversedFruits)

let longFruits = fruits.filter(function(n){
    return n.split('').length>5
})

console.log(longFruits)

longFruits = fruits.filter(s=> s.split("").length>=5)

console.log(longFruits)

let aFruitsUpper = (fruits.filter(function(a){
    return a.includes('a')
})).map(function(s){
    return s.toUpperCase()
})
console.log(aFruitsUpper)