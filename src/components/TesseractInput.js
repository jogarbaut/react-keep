import React, { useEffect, useState } from "react"
import Tesseract from "tesseract.js"
import { IoImageOutline } from "react-icons/io5"

const TesseractInput = ({ setNoteBody }) => {
  const [imageFile, setImageFile] = useState("")

  useEffect(() => {
    if (imageFile) {
      Tesseract.recognize(imageFile, "eng", { logger: (m) => m }).then(({ data: { text } }) => {
        setNoteBody(prevState => (prevState + text))
      })
    }
  }, [imageFile, setNoteBody])

  return (
    <>
      <label for="file-upload" className="imageFileInput button">
        <IoImageOutline />
      </label>
      <input id="file-upload" type="file" onChange={(e) => setImageFile(e.target.files[0])} />
    </>
  )
}

export default TesseractInput
