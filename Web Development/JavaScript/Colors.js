const colors = ['red', 'green', 'blue'];
console.log(colors[0])

colors[1] = 'yellow'
console.log(colors)

colors[colors.length] = 'white';
console.log(colors)
console.log('For Loop Iteration:')
for (i=0; i < colors.length; i++){
    console.log(colors[i])
}
console.log('While Loop Iteration:')
i = 0;
while (i < colors.length){
    console.log(colors[i])
    i = i + 1;
}
console.log('For....of Loop Iteration:')
for ( let x of colors){
    console.log(x)
}

console.log(typeof(colors))
console.log(colors.length)

colors.push('Black')
console.log(colors)

console.log(colors.pop())

console.log(colors.indexOf('blue'))

colors.owner = 'Sanjay'
console.log(colors)

for (let x in colors){
    if (colors.hasOwnProperty(x)){
        console.log(x+':'+ colors[x])
    }
}