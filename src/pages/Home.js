// Import context
import { useState, useContext } from "react"
import NoteContext from "../context/NoteContext"

import NewNote from "../components/NewNote"
import PinnedNotesCollection from "../components/PinnedNotesCollection"
import UnpinnedNotesCollection from "../components/UnpinnedNotesCollection"
import EditNote from "../components/EditNote"

const Home = ({ displayList }) => {
  const { pinnedSearchResults, unpinnedSearchResults, setSelectedNoteId, setSelectedNote } = useContext(NoteContext)

  const [noteIsOpen, setNoteIsOpen] = useState(false)
  const handleNoteClose = () => {
    setNoteIsOpen(false)
    setSelectedNoteId("")
    setSelectedNote([])
  }

  return (
    <main className="Home">
      <NewNote />
      {pinnedSearchResults.length ? <PinnedNotesCollection notes={pinnedSearchResults} displayList={displayList} noteIsOpen={noteIsOpen} setNoteIsOpen={setNoteIsOpen} /> : <></>}
      {unpinnedSearchResults.length ? <UnpinnedNotesCollection notes={unpinnedSearchResults} displayList={displayList} noteIsOpen={noteIsOpen} setNoteIsOpen={setNoteIsOpen} /> : <></>}
      {noteIsOpen ? <EditNote handleNoteClose={handleNoteClose} /> : <></>}
    </main>
  )
}

export default Home
