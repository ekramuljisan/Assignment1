class BankAccount{
    constructor(accountNumber,ownerName,balance){
        this.accountNumber= accountNumber;
        this.ownerName=ownerName;
        this.balance=balance;
    }

    deposit(amount){
        this.balance+=amount;
        console.log(`Deposit $${amount} into account ${this.accountNumber}`);
    }

    withdraw(amount){
        if(this.balance>amount){
            this.balance-=amount;
            console.log(`Withdraw $${amount} from account ${this.accountNumber}`)
        }
        else{
            console.log(`Insufficient funds from account ${this.ownerName}`);
        }
        
    }

    getBalance(){       
            return this.balance;    
    }

    displayAccountInfo(){
        console.log("\n")
        console.log("Updated Account Information:- ");
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.getBalance()}`);
    }
}


let bankAccount1=new BankAccount(Math.floor(Math.random()*100),"Ekramul Islam",2000);
let bankAccount2=new BankAccount(Math.floor(Math.random()*200),"Ahsanul Islam",2200);
//Account1
console.log("\n")
console.log("Initial Account Information:- ")
console.log("Account Number: "+bankAccount1.accountNumber);
console.log("Owner Name: "+bankAccount1.ownerName);
console.log("Balance: $"+bankAccount1.balance);
console.log("\n")

console.log("Deposit and Withdrawl:- ");
bankAccount1.deposit(200);
bankAccount1.withdraw(2300);

console.log(bankAccount1.displayAccountInfo());

//Account2
console.log("\n")
console.log("Initial Account Information:- ")
console.log("Account Number: "+bankAccount2.accountNumber);
console.log("Owner Name: "+bankAccount2.ownerName);
console.log("Balance: $"+bankAccount2.balance);
console.log("\n")

console.log("Deposit and Withdrawl:- ");
bankAccount2.deposit(200);
bankAccount2.withdraw(2300);

console.log(bankAccount2.displayAccountInfo());



