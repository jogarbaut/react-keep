import { useContext } from "react"
import NoteContext from "../context/NoteContext"

const Note = ({ note, setNoteIsOpen }) => {
  const { setSelectedNoteId } = useContext(NoteContext)

  return (
    <article
      className="note"
      style={{ backgroundColor: note.color }}
      onClick={() => {
        setNoteIsOpen(true)
        setSelectedNoteId(note.id)
      }}
    >
      <h3>{note.title && note.title}</h3>
      <div className="noteBody">{note.body && note.body}</div>
    </article>
  )
}

export default Note
