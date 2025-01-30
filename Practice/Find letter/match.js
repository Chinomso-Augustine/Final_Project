
//Practicing Defensive programming which is to validate wrong arguments before proceeding
// function to find a letter that matches with a given letter and specify the index it was found
function letterFinder(word, match){
    let condition1 = typeof(word) == 'string' && word.length>=2; // checking that word is a string and at least more than 2 letters
    let condition2 = typeof(match) == 'string' && match.length ==1; //Checking that match is a string and just one letter

    if(condition1 == true){
        for(let i=0; i < word.length; i++){
            if(word[i] == match){
                console.log('Found the ', match, "at", i); 
            }
            else{
                console.log("--- No match found at ", i);
            }
        }
    }
    else{
        console.log("Please pass correct argument to the function"); 
    }
}
letterFinder(3, 4); //wrong arguments for testing
letterFinder("cat", "c"); //correct argument