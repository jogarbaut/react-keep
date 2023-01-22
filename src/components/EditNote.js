import ReactDom from "react-dom"
import { useState, useContext, useRef, useLayoutEffect, useEffect } from "react"
import NoteContext from "../context/NoteContext"
import ColorPalette from "./ColorPalette"
import { AiOutlinePushpin, AiFillPushpin, AiFillDelete } from "react-icons/ai"
import { IoColorPaletteOutline } from "react-icons/io5"
import { format } from "date-fns"
import TesseractInput from "./TesseractInput"

const EditNote = ({ handleNoteClose }) => {
  const { selectedNote, selectedNoteId, notes, setNotes } = useContext(NoteContext)

  const [noteTitle, setNoteTitle] = useState("")
  const [noteBody, setNoteBody] = useState("")
  const [pinned, setPinned] = useState("")
  const [color, setColor] = useState("")
  const [colorPaletteToggled, setColorPaletteToggled] = useState(false)
  const [dateTime, setDateTime] = useState("")

  const MIN_TEXTAREA_HEIGHT = 32

  const textAreaRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!noteTitle && !noteBody) return
    const dateTime = format(new Date(), "MMMM dd, yyyy pp")
    const updatedNotes = notes.map((note) => (note.id === selectedNoteId ? { ...note, pinned, title: noteTitle, dateTime, body: noteBody, color } : note))
    setNotes(updatedNotes)
    handleNoteClose()
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    const updatedNotes = notes.filter((note) => note.id !== selectedNoteId)
    setNotes(updatedNotes)
    handleNoteClose()
  }

  const handleTogglePin = (e) => {
    e.preventDefault()
    !pinned ? setPinned(true) : setPinned(false)
  }

  const handleToggleColorPalette = (e) => {
    e.preventDefault()
    !colorPaletteToggled ? setColorPaletteToggled(true) : setColorPaletteToggled(false)
  }

  useLayoutEffect(() => {
    textAreaRef.current.style.height = "inherit"
    textAreaRef.current.style.height = `${Math.max(textAreaRef.current.scrollHeight, MIN_TEXTAREA_HEIGHT)}px`
  }, [noteBody])

  useEffect(() => {
    setNoteTitle(selectedNote.title)
    setNoteBody(selectedNote.body)
    setPinned(selectedNote.pinned)
    setColor(selectedNote.color)
    setDateTime(selectedNote.dateTime)
  }, [selectedNote, selectedNoteId])

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <article className="edit-note" style={{ backgroundColor: color }}>
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="noteTitle">Title</label>
            <input id="noteTitle" type="text" value={noteTitle || ""} onChange={(e) => setNoteTitle(e.target.value)} />
            <label htmlFor="pin">Pin</label>
            <button className="button" onClick={handleTogglePin}>
              {pinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
            </button>
          </div>
          <label htmlFor="noteBody">Body:</label>
          <textarea
            id="noteBody"
            ref={textAreaRef}
            type="text"
            value={noteBody}
            onChange={(e) => setNoteBody(e.target.value)}
            style={{
              minHeight: MIN_TEXTAREA_HEIGHT,
              resize: "none",
            }}
          />
          <div className="flex-row date-time">
            <p>Last modified: {dateTime}</p>
          </div>
          <div className="row">
            <div className="flex-row">
              <button className="button" onClick={handleToggleColorPalette}>
                <IoColorPaletteOutline />
              </button>
              <TesseractInput noteBody={noteBody} setNoteBody={setNoteBody} />
              <button className="button" onClick={handleDelete}>
                <AiFillDelete />
              </button>
            </div>
            <div className="flex-row">
              <button type="submit" className="button--save">
                Save
              </button>
              <button type="button" className="button--cancel" onClick={handleNoteClose}>
                Cancel
              </button>
            </div>
          </div>
          {colorPaletteToggled ? <ColorPalette color={color} setColor={setColor} /> : <></>}
        </form>
      </article>
    </>,
    document.getElementById("portal")
  )
}

export default EditNote
