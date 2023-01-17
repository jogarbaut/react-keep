import Note from "./Note";

const PinnedNotesCollection = ({ notes }) => {
  return (
    <section className="pinnedNotesCollection">
    <h3>Pinned Notes</h3>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </section>
  );
};

export default PinnedNotesCollection;
