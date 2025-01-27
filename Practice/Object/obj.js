
//Object: a collection of key-value pairs
//Declaring an object normally

let user = {name: "Chino", age: 19, school:"UCD"}; 
console.log(user)
//updating user school
user.school = "LMU"; 
console.log(user); 
console.log('\n'); 

//Declaring an object using dot
let worker = {};
worker.name = "Chino";//
worker.age = 19;
worker.school = "UCD";
console.log(worker);
//Updating worker's age 
worker.age = 39;
console.log(worker.age); 
console.log('\n'); 


//Declaring object using bracket
let student = {};
student["name"] = "Chino";
student["age"] = 19;
student["school"] = "UCD"; 
console.log(student);
student["name"] = "Sam"; //Updating student name
console.log(student)
console.log('\n'); 


//Only can allow space inside bracket, declare numbers as string data type and evaluate expression
student[" school "] = "UCD"; // adding space inside bracket
console.log(student["school"]); 
student["2023"]= 2027; //Declaring number as string; 
console.log(student["2023"]); 
console.log('\n'); 


//Another way of writing object bracket 
let car = ['speed', 'altitude', 'color'];
    let drone = {speed:100, altitude:200, color:"red"}
    for(let i =0; i < car.length; i++){
        console.log(drone[car[i]]); 
    }



