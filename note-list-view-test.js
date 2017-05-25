
function canDisplayNote() {
  var noteList = new NoteList()
    noteList.createNote('Anthony is a noob')
    noteListView = new NoteListView(noteList)
    assert.isTrue(noteListView.returnHTML() === "<ul><li><div><a href=\"#notes/\">Anthony is a noob</a></div></li></ul>"
  )


}
function canDisplaySeveralNotes() {
  var noteList = new NoteList()
    noteList.createNote('Anthony is a noob')
    noteList.createNote('So is Jay')
    noteListView = new NoteListView(noteList)
    assert.isTrue(noteListView.returnHTML() === "<ul><li><div><a href=\"#notes/\">Anthony is a noob</a></div></li><li><div><a href=\"#notes/\">So is Jay</a></div></li></ul>"
  )


  }

canDisplayNote()
canDisplaySeveralNotes()
