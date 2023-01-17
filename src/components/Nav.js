// Import context
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

import { FaSearch } from "react-icons/fa"

const Nav = () => {
  const { search, setSearch } = useContext(NoteContext)

  return (
    <nav className="Nav">
      <h1>Keep</h1>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <span><FaSearch /></span>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" placeholder="Search Your Notes" value={search} onChange={(e) => setSearch(e.target.value)} />
      </form>
      <p>Keep</p>
    </nav>
  )
}

export default Nav