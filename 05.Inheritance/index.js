class Animal {
    #isAlive;

    // public variable 
    // name and species are public
    // this variable will create by constuctor
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.#isAlive = true;
    }

    eat(food){
        return `${this.name} is eating ${food}.`;
    }

    sleep(){
        return `${this.name} is sleeping.`;
    }

    makeSound(){
        return `${this.name} makes a sound.`;
    }

    getInfo(){
        return `Name: ${this.name}, Species: ${this.species}, Alive: ${this.#isAlive}`;
    }
}


// extends to inherit parents class

class Dog extends Animal {

    #loyaltyLevel;
    
    // name and breed public variable created by constructor
    constructor(name , breed){
        super(name, "German Shepherd"); // calling parent class constructor and assigning value
        this.breed = breed;
        this.#loyaltyLevel = 10; // private variable
    }

    // overriding makeSound method
    // parent class method must be public to be overridden 
    // parent class private method cant be overridden
    // complete overriding
    makeSound(){
        return `${this.name} barks: Woof Woof!`;
    }

    // new method of this class
    wagTail(){
        return `${this.name} is wagging its tail with loyalty level of ${this.#loyaltyLevel}.`;
    }

    // i want the info of parent class also Adding more info of breed
    // super keyword is used to access parent class methods and constructor
    // so we can use super.getInfo() to call parent class method
    // not complete overriding
    getInfo(){
        return `${super.getInfo()}, Breed: ${this.breed}`;
    }

}

const dog = new Dog("Buddy", "Golden Retriever");

// parent class methods access from child class object
console.log(dog.eat("Banana")); // Buddy is eating Banana.
console.log(dog.sleep()); // Buddy is sleeping.

// parent class overridden method
console.log(dog.makeSound());// Buddy barks: Woof Woof!


// child class methods with parent class info
console.log(dog.getInfo()); // Name: Buddy, Species: German Shepherd, Alive: true, Breed: Golden Retriever

//child class new method
console.log(dog.wagTail()); // Buddy is wagging its tail with loyalty level of 10.




// ------------------------------------------------------------------------------------------------

class Person{
    name;
    age;
    email;

    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getPersonInfo(){
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
    introduce(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old. You can contact me at ${this.email}.`;
    }

}


class Employee extends Person{
    employeeId;
    department;
    // private variable
    #salary;

    constructor(name, age, email, employeeId, department){
        super(name,age,email);
        this.employeeId = employeeId;
        this.department = department;
        // this.#salary = salary;
    }

    setSalary(salary){
        this.#salary = salary;
    }

    getSalary(){
        return this.#salary;
    }

    work(){
        return `${this.name} is working in the ${this.department} department.`;
    }

    getEmployeeInfo(){
        return `${super.getPersonInfo()}, Employee ID: ${this.employeeId}, Department: ${this.department}`;
    }

    introduce(){
        return `${super.introduce()} I work as an employee in the ${this.department} department.`;
    }
}


class Manager extends Employee{

    #managerEmployees;

    constructor(name, age, email, employeeId, department,  teamSize){
        super(name, age, email, employeeId, department);
        this.teamSize = teamSize;
        this.#managerEmployees= [];
    }

    addEmployee(employee){
        // check instance of Employee
        // whether the employee is instance of Employee class or not to verify employee object
        if(employee instanceof Employee && !(employee instanceof Manager)){
            this.#managerEmployees.push(employee);
            return `${employee.name} has been added to ${this.name}'s team.`;
        }else{
            return `Invalid employee.`;
        }
    }

    getEmployee(){
        return this.#managerEmployees.map(emp => emp.name);
    }

    work(){
        return `${this.name} is managing a team of ${this.teamSize} employees in the ${this.department} department.`;
    }

    introduce(){
        return `${super.introduce()} I am a manager overseeing a team of ${this.teamSize} employees.`;
    }
    
}




class Developer extends Manager{
    programmingLanguage;
    #projectCompleted;
    
    constructor(name, age, email, employeeId, department, teamSize, programmingLanguage){
        super(name, age, email, employeeId, department, teamSize);
        this.programmingLanguage = programmingLanguage;
        this.#projectCompleted = 0;
    }
    
    writeCode(){
        return `${this.name} is writing code in ${this.programmingLanguage}.`;
    }
    
    completeProject(){
        this.#projectCompleted++;
        return `${this.name} has completed ${this.#projectCompleted} projects.`;
    }
    
    getProjectsCount(){
        return this.#projectCompleted;
    }
    work(){
        return `${this.name} is developing software using ${this.programmingLanguage} .`;
    }
    introduce(){
        return `${super.introduce()} I am a developer specializing in ${this.programmingLanguage}.`;
    }
    

}



// const Employee1 = new Employee("hello", 22, "hello@example.com", "01", "computer Engineering", 15000);

// console.log(Employee1.getPersonInfo());
// console.log(Employee1.introduce());

const manager = new Manager("Alice", 35, "alice@example.com", "EMP002", "Engineering", 5 );
const developer = new Developer("Prince", 28, "prince@example.com", "EMP001", "Engineering", 5, "JavaScript");