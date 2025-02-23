//Encapsulation(2nd principles of OOP): keeps data private and showing only necessary ones

//Bank accounted example where balance cannot directly be accessed but modify using method.
class BankAccount{
    #balance; //private and cannot be access or change directly from outside this class

    constructor(accountNum, balance){
        this.accountNum = accountNum; 
        this.#balance = balance;
    }

    //method to deposit money
    deposit(amount){
        if(amount > 0){
            this.#balance+=amount; 
            console.log(`Deposited $${amount}. New Balance: $${this.#balance}`);
        }
        else{
            console.log("Deposit amount must be positive"); 
        }
    }

    //method to withdraw money
    withdraw(amount){
        if(amount > 0 && amount <=this.#balance){
            this.#balance -=amount; 
            console.log(`$${amount} was withdrawn from your account`)
        }
        else{
            console.log("Invalid withdrawal amount"); 

        }
    }

    //Method to get Balance 
    getBalance(){
        return this.#balance; 
    }
}

//instance of BankAccount
const myAccount = new BankAccount("123456", 1000); 
myAccount.deposit(500); 
myAccount.withdraw(1000); 
console.log(`Balance: $${myAccount.getBalance()}`); 