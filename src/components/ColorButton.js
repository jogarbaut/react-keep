const ColorButton = ({ colorOption, setColor }) => {
  const handleColorClick = (e) => {
    e.preventDefault()
    setColor(e.target.value)
  }
  return <button className="button-color" type="input" style={{ backgroundColor: colorOption.hex }} onClick={handleColorClick} value={colorOption.hex}></button>
}

export default ColorButton
