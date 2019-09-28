const fs =  require('fs');


// ------------------Begin of Reusable functions ---------------------

var fetchNotes = () => {
  try {                          //if file won't exist
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString);
  } catch(e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};


// ------------------End of Reusable functions ---------------------

var updateNotes = (ID,Name,Email) => {
    remove(ID); // update the value for existing notes
    var customerNote = {ID,Name,Email}
    var filteredNotes = fetchNotes();
    filteredNotes.push(customerNote);
    saveNotes(filteredNotes);
    return customerNote
}
//  to add a new note

var addNote = (ID,Name,Email) => {
    var notes = fetchNotes();
    var customerNote = {ID,Name,Email}
    var duplicateNotes =  notes.filter((note) => { // to check if note already exists
       if(note.ID === ID) {
           updateNotes(ID,Name,Email);
       }
        return note.ID === ID;
    });
    if (duplicateNotes.length === 0){
      notes.push(customerNote);
      saveNotes(notes);
      return customerNote
    }

  };


//to list all the notes

var getAll = () => {
    return fetchNotes();
};


// to read a note

var getNote = (ID) => {
    
    var notes = fetchNotes();

    var getNotes =  notes.filter((note) => {  // to check if note exists and return note
      return note.ID === ID;
    });

    return getNotes[0]

};


// to delete a note

var remove = (ID) => {

    var notes = fetchNotes(); // reusable func

    var filteredNotes =  notes.filter((note) => { // will return all other notes other than "note to be removed"
      return note.ID !== ID;
    });

    saveNotes(filteredNotes); //save new notes array

    return notes.length !== filteredNotes.length
    
};

// function just to print out note to screen

var logNote = (note) => {
    console.log('--');
    console.log(`Customer ID: ${note.ID}`);
    console.log(`Customer Name: ${note.Name}`);
    console.log(`Customer Email: ${note.Email}`);
};

// add new function names here to be accessible from other modules

module.exports = {
  addNote, getAll, remove, getNote,logNote, updateNotes
};
