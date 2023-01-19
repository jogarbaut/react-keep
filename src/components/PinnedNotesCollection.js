import Note from "./Note"

const PinnedNotesCollection = ({ notes, setNoteIsOpen, displayList }) => {
  let noteCollectionClassName
  if (displayList) {
    noteCollectionClassName = "notes-collection__list"
  } else {
    noteCollectionClassName = "notes-collection__grid"
  }

  return (
    <section className="notes-collection">
      <h2>Pinned Notes</h2>
      <div className={noteCollectionClassName}>
        {notes.map((note) => (
          <Note key={note.id} note={note} setNoteIsOpen={setNoteIsOpen} />
        ))}
      </div>
    </section>
  )
}

export default PinnedNotesCollection
