// Import context
import { useContext } from "react"
import NoteContext from "../context/NoteContext"

import useWindowSize from "../hooks/UseWindowSize"

import brandIcon from "../assets/img/brand-icon.png"

import { IoMenuOutline, IoSearchOutline, IoRefreshOutline, IoSettingsOutline, IoGridOutline, IoReorderFourOutline, IoInformationCircleOutline, IoLogoGithub } from "react-icons/io5"

const CustomNav = ({ displayList, setDisplayList }) => {
  const { search, setSearch } = useContext(NoteContext)
  const { width } = useWindowSize()

  return (
    <nav className="custom-nav">
      <div className="flex-row brand">
        {/* <button className="button button__hamburger">
          <IoMenuOutline />
        </button> */}
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
            <button className="button" onClick={() => setDisplayList(prevState => !prevState)} >
              { displayList ? <IoGridOutline /> : <IoReorderFourOutline />}
            </button>
            <button className="button">
              <IoLogoGithub />
            </button>
          </>
        ) : width < 992 ? (
          <>
            <button className="button" onClick={() => setDisplayList(prevState => !prevState)}>
              { displayList ? <IoGridOutline /> : <IoReorderFourOutline />}
            </button>
            <button className="button">
              <IoSettingsOutline />
            </button>
            <button className="button">
              <IoLogoGithub />
            </button>
          </>
        ) : (
          <>
            <button className="button">
              <IoRefreshOutline />
            </button>
            <button className="button" onClick={() => setDisplayList(prevState => !prevState)}>
              { displayList ? <IoGridOutline /> : <IoReorderFourOutline />}
            </button>
            <button className="button">
              <IoInformationCircleOutline />
            </button>
            <button className="button">
              <IoLogoGithub />
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default CustomNav
