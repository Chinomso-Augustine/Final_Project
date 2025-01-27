//Using Try and catch which does not stop program when error occurred. Just to notify you about it.
//Place cod that might cause an error in try
//using catch to catch the error and display it 
try{
    console.log(c + d); 
}
catch(err){
    console.log(err)//displays the error message
    console.log("There's error here"); 
}
console.log("Display if program continue running after catching error");


//Throwing reference error
try{
    throw new ReferenceError();
}
catch(err){
    console.log("\n")
    console.log(err);
    console.log("Reference error here")
}
console.log("Display if continue running after error"); 