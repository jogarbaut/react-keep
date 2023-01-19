import { useState, useContext } from "react"
import NoteContext from "../context/NoteContext"
import useWindowSize from "../hooks/UseWindowSize"
import brandIcon from "../assets/img/brand-icon.png"
import { IoSearchOutline, IoGridOutline, IoReorderFourOutline, IoInformationCircleOutline, IoLogoGithub } from "react-icons/io5"
import Instructions from "./Instructions"

const CustomNav = ({ displayList, setDisplayList }) => {
  const { search, setSearch } = useContext(NoteContext)
  const { width } = useWindowSize()

  const [instructionsIsOpen, setInstructionsIsOpen] = useState(false)
  const handleInstructionsClose = () => {
    setInstructionsIsOpen(false)
  }

  return (
    <nav className="custom-nav">
      <div className="flex-row brand">
        <button className="button--brand">
          <img src={brandIcon} alt="brand-icon" className="brand__img" />
        </button>
        {width > 992 ? <h1 className="brand__title">React Keep</h1> : <></>}
      </div>

      <div className="flex-row search">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <span className="button">
            <IoSearchOutline />
          </span>
          <label htmlFor="search">Search</label>
          <input id="search" type="text" placeholder="Search Your Notes" value={search} onChange={(e) => setSearch(e.target.value)} />
        </form>
      </div>

      <div className="flex-row settings">
        {width < 768 ? (
          <>
            <button className="button" onClick={() => setDisplayList((prevState) => !prevState)}>
              {displayList ? <IoGridOutline /> : <IoReorderFourOutline />}
            </button>
            <button className="button">
              <IoLogoGithub />
            </button>
          </>
        ) : width < 992 ? (
          <>
            <button className="button" onClick={() => setDisplayList((prevState) => !prevState)}>
              {displayList ? <IoGridOutline /> : <IoReorderFourOutline />}
            </button>
            <button className="button" onClick={() => setInstructionsIsOpen(true)}>
              <IoInformationCircleOutline />
            </button>
            <button className="button">
              <IoLogoGithub />
            </button>
          </>
        ) : (
          <>
            <button className="button" onClick={() => setDisplayList((prevState) => !prevState)}>
              {displayList ? <IoGridOutline /> : <IoReorderFourOutline />}
            </button>
            <button className="button" onClick={() => setInstructionsIsOpen(true)}>
              <IoInformationCircleOutline />
            </button>
            <button className="button">
              <a href="https://github.com/jomelbautista/react-keep" id="button-github" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub />
              </a>
            </button>
          </>
        )}
      </div>
      {instructionsIsOpen ? <Instructions handleInstructionsClose={handleInstructionsClose} /> : <></>}
    </nav>
  )
}

export default CustomNav
