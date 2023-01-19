import ReactDom from "react-dom"
import { IoCloseOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

const Instructions = ({ handleInstructionsClose }) => {
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
          <li>React components subscribe to the context changes, as necessary, and will automatically rerender.</li>
          <li>React useEffect hooks are implemented to enable the user to search their notes using the search bar.</li>
          <li>React state enables users to interact with new and existing notes.</li>
          <li>A custom React hook was utilized to detect screen width and conditionally render components.</li>
        </ul>
        <h3>User Interface</h3>
        <ul>
          <li>Web application was designed with "mobile-first" design approach.</li>
          <li>User can toggle between the horizontal stacked notes view or the grid view based on their preference using the </li>
          <li>The custom navigation bar conditionally renders buttons based on device dimensions.</li>
        </ul>
        <h3>Application Features</h3>
        <ul>
          <li>Create a note with the note form and add a title, body, background color, and choose to pin the note.</li>
          <li>Click a note to edit or delete a note.</li>
          <li>Use the search bar to enter a search term which will automatically rerender the pinned/unpinned sections.</li>
          <li>Pin and unpin notes to visually separate the notes.</li>
        </ul>
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
