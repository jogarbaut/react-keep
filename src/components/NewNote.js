import { useState, useContext, useRef, useLayoutEffect } from "react"

// Import context
import NoteContext from "../context/NoteContext"

import ColorPalette from "./ColorPalette"

import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai"

import { IoColorPaletteOutline } from "react-icons/io5"

// Date-fns package
import { format } from "date-fns"

const NewNote = () => {
  const [noteTitle, setNoteTitle] = useState("")
  const [noteBody, setNoteBody] = useState("")
  const [pinned, setPinned] = useState(false)
  const [color, setColor] = useState("#fff")
  const [colorPaletteToggled, setColorPaletteToggled] = useState(false)

  const MIN_TEXTAREA_HEIGHT = 32

  const { notes, setNotes } = useContext(NoteContext)

  const inputRef = useRef()
  const textAreaRef = useRef()

  useLayoutEffect(() => {
    textAreaRef.current.style.height = "inherit"
    textAreaRef.current.style.height = `${Math.max(textAreaRef.current.scrollHeight, MIN_TEXTAREA_HEIGHT)}px`
  }, [noteBody])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!noteTitle && !noteBody) return
    const id = notes.length ? notes[notes.length - 1].id + 1 : 1
    const dateTime = format(new Date(), "MMMM dd, yyyy pp")
    const newNote = { id, pinned, title: noteTitle, dateTime, body: noteBody, color }
    try {
      const allNotes = [...notes, newNote]
      setNotes(allNotes)
      setNoteTitle("")
      setNoteBody("")
      setColor("transparent")
      setColorPaletteToggled(false)
      setPinned(false)
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
  }

  const handleTogglePin = (e) => {
    e.preventDefault()
    !pinned ? setPinned(true) : setPinned(false)
  }

  const handleToggleColorPalette = (e) => {
    e.preventDefault()
    !colorPaletteToggled ? setColorPaletteToggled(true) : setColorPaletteToggled(false)
  }

  return (
    <div className="new-note-container">
      <div className="new-note" style={{ backgroundColor: color }}>
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="noteTitle">Title</label>
            <input autoFocus ref={inputRef} id="noteTitle" type="text" placeholder="Title" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
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
            placeholder="Take a Note..."
            value={noteBody}
            onChange={(e) => setNoteBody(e.target.value)}
            style={{
              minHeight: MIN_TEXTAREA_HEIGHT,
              resize: "none",
            }}
          />
          <div className="row">
            <button className="button" onClick={handleToggleColorPalette}>
              <IoColorPaletteOutline />
            </button>
            <button type="submit" className="button--save">
              Save
            </button>
          </div>
          {colorPaletteToggled ? <ColorPalette color={color} setColor={setColor} /> : <></>}
        </form>
      </div>
    </div>
  )
}

export default NewNote
