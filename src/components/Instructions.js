import ReactDom from "react-dom"
import { IoCloseOutline, IoLogoGithub, IoLogoLinkedin, IoGridOutline, IoRefreshOutline, IoReorderFourOutline, IoColorPaletteOutline, IoImageOutline } from "react-icons/io5"
import { AiOutlinePushpin } from "react-icons/ai"

const Instructions = ({ handleInstructionsClose }) => {

  const handleResetToggled = async () => {
    localStorage.removeItem("notesList");
    window.location.reload(false)
  }

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <article className="instructions">
        <div className="flex-row instructions__header">
          <h2>React Keep Instructions</h2>
          <button className="button" type="button" onClick={handleInstructionsClose}>
            <IoCloseOutline />
          </button>
        </div>
        <p>Web application built with React front-end library and custom responsive UI components inspired by Google Keep.</p>

        <h3>React Technologies</h3>
        <ul>
          <li>React components subscribe to the context changes and automatically rerender.</li>
          <li>React useEffect and useContext hooks are implemented to enable the user to search and automatically display notes matching the search term in the note title or body.</li>
          <li>React state enables users to interact with new and existing notes.</li>
          <li>A custom React hook was utilized to detect screen width and conditionally render components.</li>
        </ul>
        <h3>User Interface</h3>
        <ul>
          <li>Web application was designed with "mobile-first" design approach.</li>
          <li>User can toggle between the horizontal stacked or grid view based on preference using the <IoReorderFourOutline /> or <IoGridOutline /> icons. </li>
          <li>The custom navigation bar conditionally renders buttons based on device dimensions.</li>
        </ul>
        <h3>Application Features</h3>
        <ul>
          <li>Create a note with the note form and add a title, body, background color, and choose to pin the note.</li>
          <li>Edit or delete a note by clicking on it.</li>
          <li>Pin and unpin notes to visually separate the notes using the <AiOutlinePushpin /> icon.</li>
          <li>Click the <IoColorPaletteOutline /> to select a color for the note.</li>
          <li>Use the <IoRefreshOutline /> to refresh the window.</li>
          <li>Click the <IoImageOutline /> to upload a photo and automatically extract the text to the note body (images with good contrast between background and text work best).</li>
        </ul>
        <div className="flex-row app-reset">
          <button type="button" className="btn__app-reset" onClick={handleResetToggled}>
            Application Reset
          </button>
        </div>
        <hr />
        <div className="signature">

          <h4>Project Created by Jomel Bautista</h4>
          <div className="flex-row">
            <button className="button__signature" type="button">
              <a href="https://github.com/jomelbautista" id="button-github" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub />
              </a>
            </button>
            <button className="button__signature" type="button">
              <a href="https://www.linkedin.com/in/jomelgbautista/" id="button-github" target="_blank" rel="noopener noreferrer">
                <IoLogoLinkedin />
              </a>
            </button>
          </div>
        </div>
      </article>
    </>,
    document.getElementById("portal")
  )
}

export default Instructions
