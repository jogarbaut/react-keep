import ReactDom from "react-dom"

const Instructions = () => {
  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <article className="instructions">
        <p>Instructions</p>
      </article>
    </>,
    document.getElementById("portal")
  )
}

export default Instructions
