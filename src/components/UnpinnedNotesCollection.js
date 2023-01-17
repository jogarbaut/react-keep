import Note from "./Note";

const UnpinnedNotesCollection = ({ notes }) => {
  return (
    <>
      <h3>Other Notes</h3>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </>
  );
};

export default UnpinnedNotesCollection;
