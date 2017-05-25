(function(exports) {
  function NoteListView(noteList){
    this.noteList = noteList
  }

  NoteListView.prototype.returnHTML = function() {
    return "<ul>" + this.noteList.seeNotes().map(function(note) {
      return "<li><div><a href=\"#notes/\">" + note.readNote().slice(0,20) + "</a></div></li>";
    }).join("") + "</ul>";
  }

  exports.NoteListView = NoteListView
})(this)
