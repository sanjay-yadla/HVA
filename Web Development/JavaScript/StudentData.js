var student = {};

student.name = 'sanjay';
student.email = 'yadlasanjay@gmail.com';
student.age = 20;

console.log(student.name);

student.age = 10;
console.log(student.age)

//..................//

student = {name:'sanjay',greet:function(name){return 'Hello, ' + name + '!'},
address:{country:'India', city: 'Bhimavaram', pin_code:534204}}

console.log(student.greet(student.name))
console.log(student.address.country)

student.address.pin_code = 535580;
console.log(student.address.pin_code)

var friend = {name:'prabha',greet:function(name){return 'Hello, ' + name + '!'},
address:{country:'India', city: 'Vizianagaram', pin_code:535580}}
console.log(friend.greet(friend.name))
console.log(friend)

var topper = {name:'topper',greet:function(name){return 'Hello, ' + name + '!'},
address:{country:'India', city: 'Vizag', pin_code:535002}}

console.log(topper.greet(topper.name))
console.log(topper)

class Student {
    constructor (name, email, age, country, city, pin_code){
        this.name = name ;
        this.age = age;
        this.email = email;
        this.country = country;
        this.city = city;
        this.pin_code = pin_code;
    }
    greet(){
        console.log('Hello ' + this.name + '!');
    }
    getFullAddress(){
        console.log(this.country +','+ this.city + '-'+this.pin_code)
    }
}

const a = new Student('sanjay','yadla@gmail.com',20,'India','VZM',535580);
console.log(a)

var friend = new Student('friend','friend@gmail.com',21,'India','Bhimavaram',534204);
console.log(friend)
var topper = new Student('topper','topper@gmail.com',22,'India','West Godavari',500000);
console.log(topper)

a.greet()
a.getFullAddress()

friend.greet()
friend.getFullAddress()

topper.greet()
topper.getFullAddress()