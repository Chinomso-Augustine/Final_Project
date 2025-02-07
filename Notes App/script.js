
const myNoteArray = [ ]; 


/*Saving Note Process 

1. Note is typed and button is pressd
2. JS grab the text
3. Create a new note box
4. Puts the note on the screen
5. cleans the input box
*/
function saveNote(){
    let inputValue = document.getElementById("noteInput").value; //Grabbing the text from the input

    if(inputValue.trim() === "") return; //prevents empty notes

    let newNote = document.createElement('div');// create new note box (div) where the notes will be store
    newNote.textContent = inputValue; //put the notes inside the box (div)

    let dateCreated = new Date().toLocaleString(); //creating new date (current date)  and time
    myNoteArray.push({notes: inputValue, noteDate:dateCreated}); //Push in note and date to array. 

    let deleteBtn = document.createElement('button');//Creates delete btn
    deleteBtn.textContent = "Delete"; //Set's btn to display Delete

    deleteBtn.onclick = function (){ //Deletes notes next to delete when delete is clicked.
        deleteNote(inputValue, dateCreated, newNote); 

    };

    newNote.appendChild(deleteBtn); 

    let noteStorage = document.getElementById("notesContainer"); //Get access to the container waiting to display note on the screen
    noteStorage.appendChild(newNote);//Add the new note box inside the container to be display

    document.getElementById("noteInput").value = ""; //Clear the typing space once note is saved. 
}

//Delete

function deleteNote(inputValue, dateCreated, newNote){
    myNoteArray.notes.remove();
}