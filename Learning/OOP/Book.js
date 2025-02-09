
//Class that represent books in the library 

class Book{
    constructor(title, author, publicationYear){
        this.Title = title; 
        this.Author = author; 
        this.PublicationYear = publicationYear; 
    }
    //Method to display book details 
    displayBook(){
        console.log(`${this.title}, ${this.Author}, ${this.publicationYear}`); 
    }
}

//Book("Dear Friend", "James", "2012"); //Cannot call Book cuz it's a class, not a function 

//Instantiation of Book 
const myBook = new Book("Dear Friend", "James", 2012); 
console.log(myBook); 