import ColorButton from "./ColorButton"
import { colorDataArray } from "../data/colorData"

const ColorPalette = ({ color, setColor }) => {

  return (
    <div className="color-palette">
      {colorDataArray.map((colorOption) => (
        <ColorButton key={colorOption.id} colorOption={colorOption} color={color} setColor={setColor} />
      ))}
    </div>
  )
}

export default ColorPalette
