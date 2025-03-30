// Task 1 Customer Class

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
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
customer2.addPurchase(650);

customer3.addPurchase(500);
customer3.addPurchase(900);
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
// Creating a SalesRep
const salesRep = new SalesRep("Fernando");

// Adding clients to the sales rep
salesRep.addClient(customer1);
salesRep.addClient(customer2);
salesRep.addClient(customer3);
salesRep.addClient(vipCustomer);

console.log("SalesRep Clients:", salesRep.clients.map(client => client.name));

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

console.log(vipCustomer.name, "-", vipCustomer.email, "(VIP Level:", vipCustomer.vipLevel + ")");

// Task 4 Client Report System

// Client Report System
const allCustomers = [customer1, customer2, customer3, vipCustomer];

// Calculate total revenue
const totalRevenue = allCustomers.reduce((sum, customer) => sum + customer.getTotalSpent(), 0);
console.log("Total Revenue: $", totalRevenue);

// Find high-spending customers (spent over $500)
const highSpenders = allCustomers.filter(customer => customer.getTotalSpent() > 500);
console.log("High-Spending Customers:", highSpenders.map(customer => customer.name));

// Create customer summary
const customerSummary = allCustomers.map(customer => ({ name: customer.name, totalSpent: customer.getTotalSpent() }));
console.log("Customer Summary:", customerSummary);