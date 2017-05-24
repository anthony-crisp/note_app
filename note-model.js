(function(exports) {
  function Note(str) {
    this._text = str;
};
Note.prototype.readNote = function () {
  return this._text
};
  exports.Note = Note;
})(this)
