
//1: Inheritance: Allows child class to inherit the parent class properties and method 
//Uses extends to show inheritance


//Vehicle Class that will be inherited
class Vehicle{
    constructor(brand, model){
        this.brand = brand; 
        this.model = model; 
    }

    //Method to start car Engine
    startEngine(){
        console.log(`${this.brand} ${this.model}'s engine started.`)
    }
}

//Car Inheriting properties and method of vehicle. Inherit brand and model from Vehicle

class Car extends Vehicle{
    constructor(brand, model, doors){
        super(brand, model);//Since brand and model are borrowed/inherited from Vehicle, use super before using them
        this.doors = doors; 
    }

    honk(){
        console.log("Honk!"); 
    }
}

//instance
const myCar = new Car("Toyota", "Corolla", 4); 
myCar.startEngine(); //inherites startEngine method from Vehicle 
myCar.honk(); //From Car method 