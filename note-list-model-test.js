function noteListDefaultArrayEmpty(){

  var noteList = new NoteList();
  assert.isTrue(noteList.seeNotes().length === 0);
}

function canPutANoteInNoteList(){
  var listToCheck = new NoteList
  listToCheck.createNote("Favourite drink: seltzer")
  assert.isTrue(listToCheck.seeNotes().length === 1);
  assert.isTrue(listToCheck.seeNotes()[0].readNote() === "Favourite drink: seltzer");
}

noteListDefaultArrayEmpty()
canPutANoteInNoteList()
