function testText() {
      var str = "My favourite language is JavaScript"
      var note = new Note(str);
        assert.isTrue(note.readNote() === str);
    }

testText()
