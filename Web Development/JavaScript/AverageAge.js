var people = [{name : 'Alice',age: 20},
    {name: 'Bob', age : 35},
    {name:'Charlie', age : 15}]

function calculateAverageAge(people){
    var sum = 0;
    people.forEach(x=> sum+=x.age);
    let averageAge = sum/people.length;
    return averageAge;
}

console.log(calculateAverageAge(people))

