
const fs =  require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

// ------------ Begin - command configuration -----------------
const customerID = {
    describe: 'ID of Customer',
    demand : true,
    alias : 'id'
}

const customerName = {
    describe: 'Name of Customer',
    demand : true,
    alias : 'name'
}

const customerEmail = {
    describe: 'Email ID of Customer',
    demand : true,
    alias : 'email'
}

const argv =  yargs

    .command('add','Add a new note',{
        ID: customerID,
        Name: customerName,
        Email: customerEmail
    })
    .command('update','Update an existing note',{
        ID: customerID,
        Name: customerName,
        Email: customerEmail
    })
    .command('list','List all notes')
    .command('read','Read a note',{
        ID: customerID
    })
    .command('remove','Remove a Note',{
      ID: customerID
    })
    .help()
    .argv;


// ------------ End - command configuration -----------------


var command = yargs.argv._[0];


if (command === 'add'){
    var note = notes.addNote(argv.ID,argv.Name, argv.Email);
    if (note){
      notes.logNote(note);                                //add a new note
    } else{
      console.log("Note was updated");
    }
}

else if (command === 'update'){
    var note = notes.updateNotes(argv.ID,argv.Name, argv.Email);
    if (note){
        notes.logNote(note);                                //add a new note
    } else{
        console.log("Note was updated");
    }
}

else if (command === 'list') {
  var AllNotes = notes.getAll();
  console.log(`Printing ${AllNotes.length} note(s).`);
  AllNotes.forEach((note)=>{                                //list all note(s)
    notes.logNote(note);
  });
}

else if (command === 'read') {
   var note = notes.getNote(argv.ID);
   if(note){
    notes.logNote(note);                                //read a note 
          }
   else{
    console.log("Note not found");
   }
}
else if (command === 'remove') {
    var noteRemoved = notes.remove(argv.ID);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}

else{
  console.log('command note recognized'); 
}
