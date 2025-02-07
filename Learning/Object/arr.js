//Working with array which is similar to objects

//Adding to array using push()
let fruit = []; 
    fruit.push("Apple"); //Adds apple to the array 
    fruit.push("Pear"); //adds pear to the array
    console.log(fruit); 


//Removing last item from an array using pop(); 
//Note: pop() removes the last element in the array. 
fruit.pop()
console.log(fruit); 

//Function that take in params and push them to array

function addArray(one, two, three){
    let arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three); 
    //console.log(arr) instead of this, I am using return
    return arr;
}

let result = addArray("blue", "Red", "Green"); 
console.log(result);