
//Class-> contains className, constructor to be called, method to be accessed and nore
class Customer{
    //constructor to initialize customers with property and use when class is called
    constructor(name, email, phone){
        this.name = name; //class properties 
        this.email = email; 
        this.phone = phone; 
        this.orders = []; 
    }
    //method to place an order
    placeOrder(product, quantity){
        const customerOrder = {
            product,
            quantity,
            date:new Date().toISOString(), //toISOString() returns dates and time in formate: YY-MM-DDTHH: MM:SS
        };
        //Pushing customerOrders to orders property in the constructor
        this.orders.push(customerOrder);
        console.log(`${this.name}, placed an order for ${quantity} ${product}.`); 
    }

    //Method to view customers order history 
    viewOrderHistory(){
        console.log(`Order history for ${this.name}:`) // Display customer's name 
        this.orders.forEach((customerOrder, index) => { //Loops through customersOrder and store values in index
            console.log(`${index + 1}. ${customerOrder.product}: ${customerOrder.quantity} units on ${customerOrder.date}`); 
        });
    }
}
//Instance of class-> Has access to all properties and method of Customers
const customer1 = new Customer("John Cool", "john@gmail.com", "12345678910");
 customer1.placeOrder("T-shirt", 2); 
 customer1.placeOrder("Jean", 11); 
 customer1.viewOrderHistory(); 