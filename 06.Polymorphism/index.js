// Polymorphism in JavaScript


// many forms

// compile time polymorphism (method overloading) is not directly supported in JavaScript
// let we try to achieve method overloading using function arguments
 class Calculator {
    // use of rest operator - which collects all the arguments into an array
    add(...number){
        if (number.length === 0) return;
        if(number.length === 1 && typeof number[0] === 'number'){ 
            return number[0];
        }
        if(number.length === 2){
            return number[0] + number[1];
        }

        return number.reduce((sum,num) => sum + num,0);
    }
 }

 const calculator = new Calculator();

 console.log(calculator.add()); // undefined
 console.log(calculator.add(5)); // single argument  5
console.log(calculator.add(5,10)); // two arguments  15
console.log(calculator.add(5,10,15,20,25,30,35)); // multiple arguments  140


// method overriding (run time polymorphism)
class Animal {
    speak(){
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    // overriding the speak method
    // actual it was in parent class Animal but we override it in child class Dog
    speak(){
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.speak(); // Dog barks


// Interface Polymorphism (Duck Typing)
// 

class DebitCard {
    pay(){
        console.log('Pay BY Debitcard');
    }
}

class Creditcard{
    pay(){
        console.log('Pay BY Creditcard');
    }
}

class UPI{
    pay(){
        console.log('Pay BY UPI');
    }   
}

// all the class has same method pay()
// Polymorphic function - works with any object that has pay() method
function PayNow(paymentMethod){
    paymentMethod.pay();
}

// make object of the class
const debit = new DebitCard();
const credit = new Creditcard();
const upi = new UPI();

PayNow(debit);
PayNow(credit);
PayNow(upi);


// abstract class

class Animal {
    makeSound(){
        throw new Error("You have to implement the method makeSound!");
    }
}