import { useState, useContext, useRef } from "react";

// Import context
import NoteContext from "../context/NoteContext";

// Date-fns package
import { format } from "date-fns";

const NewNote = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [pinned, setPinned] = useState(false);

  const { notes, setNotes } = useContext(NoteContext);

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!noteTitle && !noteBody) return;
    const id = notes.length ? notes[notes.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const newNote = { id, pinned, title: noteTitle, dateTime, body: noteBody };
    try {
      const allNotes = [...notes, newNote];
      setNotes(allNotes);
      setNoteTitle("");
      setNoteBody("");
      setPinned(false);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleTogglePin = (e) => {
    e.preventDefault();
    !pinned ? setPinned(true) : setPinned(false);
  };

  return (
    <div className="NewNote">
      <form className="newNoteForm" onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="noteTitle">Title:</label>
          <input autoFocus id="noteTitle" type="text" placeholder="Title" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
          <label htmlFor="pin">Pin</label>
          <button onClick={handleTogglePin}>Pin</button>
        </div>
        <label htmlFor="noteBody">Body:</label>
        <textarea id="noteBody" ref={inputRef} type="text" placeholder="Take a Note..." value={noteBody} onChange={(e) => setNoteBody(e.target.value)} />
        <div className="row">
          <button onClick={(e) => e.preventDefault()}>Colors</button>
          <button type="submit" className="btn-save">Save</button>
        </div>
      </form>
    </div>
  );
};

export default NewNote;
