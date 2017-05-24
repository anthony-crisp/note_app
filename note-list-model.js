(function(exports){

  function NoteList() {
    this._notes = []
  }

  NoteList.prototype.seeNotes = function() {
    return this._notes
  }

  NoteList.prototype.createNote = function(str) {
    this._notes.push(new Note(str))
  }


  exports.NoteList = NoteList;

})(this)
