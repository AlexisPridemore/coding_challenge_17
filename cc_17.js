// Task 1 Customer Class

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }

    //Get Customer Details
getDetails() {
    return `Customer Name: ${this.name}, Customer Email: ${this.email}, Total Spent: $${this.getTotalSpent()} `
}

// Add purchase amounts to Purchase History
addPurchase(amount) {
    this.purchaseHistory.push(amount);
}

// Function to calculate the total amount spent
getTotalSpent(){
    return this.purchaseHistory.reduce((total, amount) => total + amount, 0)
}

}
//Creating new customers
const customer1 = new Customer("Micheal Jordan", "MJordan23@gmail.com"); 

const customer2 = new Customer("Steph Curry", "SCurry30@gmail.com"); 

const customer3 = new Customer ("Lebron James", "KingJames@gmail.com");

// Adding purchases
customer1.addPurchase(100);
customer1.addPurchase(500);
customer1.addPurchase(50);

customer2.addPurchase(300);
customer2.addPurchase(150);

customer3.addPurchase(500);
customer3.addPurchase(400);
customer3.addPurchase(200);

//Log Customer Details
console.log(customer1.getDetails())
console.log(customer2.getDetails())
console.log(customer3.getDetails())




