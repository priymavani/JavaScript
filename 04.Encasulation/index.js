
// encapsulation before es6


function BankAccount(amount){
    let balance = amount;

    function validateAmount(validateAmount){
       return validateAmount > 0 && typeof validateAmount === 'number';
    }

    return{
        checkBalance: function(){
            return balance;
        },
        deposit: function(depositeAmount){
            if(!validateAmount(depositeAmount)){
                console.log('Invalid deposit amount');
                return;
            }
            balance += depositeAmount;
            console.log(`You have deposited ${depositeAmount}. Your new balance is ${balance}`);
        
        },
        withdraw: function (withdrawAmount){
            if(!validateAmount(withdrawAmount)){
                console.log('Invalid withdraw amount');
                return;
            }

            if(withdrawAmount > balance){
                console.log(`Insufficient funds. Your current balance is ${balance}`);
                return;
            }

            balance -= withdrawAmount;
            console.log(`You have withdrawn ${withdrawAmount}. Your new balance is ${balance}`);
            

        }
    }

}
// in this we had declare the variable balance inside the function
// balance is act as private because we return only method in the function
// the user cant access the balance variable directly 
console.log(BankAccount(1000))

const user1 = BankAccount(1000);

console.log(user1); // { checkBalance: [Function: checkBalance], deposit: [Function: deposit], withdraw: [Function: withdraw] }
console.log(user1.checkBalance()); // 1000
user1.deposit(500);

console.log(user1.checkBalance()); 

user1.withdraw(500); 






// After ES6 JS

// in class we not use function keyword because class is bluprint for object
class UserProfile {

    // to make private we use #
    #email;
    #password;
    #loginAttempts;
    
    // public not to use #
    username;


    constructor(username, email, password) {
        this.username = username;
        this.#email = email;
        this.#password = this.#hashedPassword(password);
        this.#loginAttempts = 0;
    }

    // private method to hash password
    #hashedPassword(password) {
        //password hash is to chanege the password into unreadable format
       return `hashed_${password}_value`;
    }

    getEmail() {
        return this.#email;
    }

    updatePassword(oldPassword, newPassword) {
        if( this.#hashedPassword(oldPassword) === this.#password ) {
            this.#password = this.#hashedPassword(newPassword);
            console.log('Password updated successfully.');
        }else{
            console.log('Old password is incorrect.');
            return `Incorrect Password`;
        }
    }


    login(user, user_password) {
        
        if(this.#loginAttempts >= 5 ){
            console.log('Account locked due to too many failed login attempts.');
            
            return 'Account locked due to too many failed login attempts.';
        }
        if(user === this.username || user === this.#email) {
            if(this.#password === this.#hashedPassword(user_password)) {
                console.log('Login Successful!')
               
                return 'Login successful.';
            }else{
                console.log('Incorrect password.');
               this.#loginAttempts++;
                return 'Incorrect password.';
            }
        }else{
            console.log('User not found.');
            return `User not found.`;
        }
        
    }

    logout(){
        this.#loginAttempts = 0;
        console.log('User logged out successfully.');
        return `Logout Successful`;
    }


}


const user = new UserProfile("TEST1" , "test@gmail.com" , "test123");
console.log(user); // UserProfile { username: 'TEST1' }

// console.log(user.email); // undefined

console.log(user.getEmail()); // test@gmail.com


user.login("TEST1", "test123"); // Login Successful!
user.login("TEST1", "test23"); // Incorrect password.
user.updatePassword("test123", "newpass123"); // Password updated successfully






