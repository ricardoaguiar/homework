console.log('notes --- solved in class');

const notes = [];

function addNote(id, content) {
    notes.push({id, content});
}

function getNoteFromId(id) {
    if (typeof id !== "number") {
        console.error("id has to be a number");
    }

    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
}

function getAllNotes() {
    return notes;
}

function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log("The note with id: " + notes[i].id + ", has the following note text: \"" + notes[i].content + "\".");
    }
}

addNote(1, "something");
addNote(2, "something else");

const findNote = getNoteFromId(1); 
console.log(findNote);

logOutNotesFormatted();