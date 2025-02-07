
//Looping through strings of array

let veggies = ['Onion', 'parsley', 'carrot']; 
console.log(veggies.length); 

for(let i =0; i < veggies.length; i++){ //Looping through the array to get individual items
    console.log(veggies[i])
}

//sample 2 
let greeting = "Hello "; 
for(let i = 0; i < greeting.length; i++){
    console.log(greeting[i]); 
}

//Concatenating two strings
let name = "Chino"; 
console.log(greeting +  name); // using + 
console.log(greeting.concat(name)); // using .concat function

//reading individual strings using charAt()
console.log(greeting.charAt(0)); 
console.log(greeting.charAt(3)); 

//Finding the index of element
console.log(greeting.indexOf("H"))

//Splitting string into such-strings
console.log(greeting.split("")); 

//Checking type of variable 
console.log(typeof(name)); //string
console.log(typeof(3)); // int
console.log(typeof(true)); 
console.log(typeof(9 > 2)); //bool
console.log(typeof([3, 4, 6, 6])) // object