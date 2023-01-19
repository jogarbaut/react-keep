import Note from "./Note"

const UnpinnedNotesCollection = ({ notes, setNoteIsOpen, displayList }) => {
  let noteCollectionClassName
  if (displayList) {
    noteCollectionClassName = "notes-collection__list"
  } else {
    noteCollectionClassName = "notes-collection__grid"
  }

  return (
    <section className="notes-collection">
      <h2>Other Notes</h2>
      <div className={noteCollectionClassName}>
        {notes.map((note) => (
          <Note key={note.id} note={note} setNoteIsOpen={setNoteIsOpen} />
        ))}
      </div>
    </section>
  )
}

export default UnpinnedNotesCollection
