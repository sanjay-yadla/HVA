class Employee{
    constructor(name, email, age, department, position, salary){
        this.name = name;
        this.email = email
        this.age = age
        this.department = department;
        this.position = position;
        this.salary = salary;
    }
    introduce (){
        console.log('Hello, I am ' + this.name +',' + this.position);
    }
    displaySalary (){
        console.log("Salary : $" + this.salary)
    }
}

const newEmployee = new Employee('Bhavana', 'BhavanaSree@gmail.com', 20, 'ECE', 'Student', -70000);
console.log(newEmployee);

const manager = new Employee ('Likhita', 'likhita@gmail.com', 25, 'ECE', 'manager', 100000);
console.log(manager);

newEmployee.introduce()
newEmployee.displaySalary()

manager.introduce()
manager.displaySalary()