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

// Task 2 SalesRep Class

class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }

// Function to get Sales Rep Details
getDetails() {
    const totalClientSpent = this.clients.reduce((total, client) => total + client.getTotalSpent(), 0);
    return `Sales Rep Name: ${this.name}, Total Clients Spent: $${totalClientSpent}`;
    }
//Add Clients
    addClient(customer) {
        this.clients.push(customer);
    }
 // Method to get total spent by a client
 getClientTotal(name) {
    const client = this.clients.find(customer => customer.name === name);
    if (client) {
       return `${client.name} has spent $${client.getTotalSpent()}`; // If the client is found log this to console
    } else {
       return `Client not found.`; // If the client is not found log this message 
    }
 }
}   

// Task 3 VIP Customer Class

class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
    }

//Get Total spent method to add 10% bonus
getTotalSpent() {
    return super.getTotalSpent() * 1.1;
}
}    

//Add VIP customer
const vipCustomer = new VIPCustomer("Kobe Bryant", "BlackMamba@gmail.com", "Gold");
//Add purchases
vipCustomer.addPurchase(1000);
vipCustomer.addPurchase(500);