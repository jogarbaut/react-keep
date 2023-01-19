import ColorButton from "./ColorButton"

const ColorPalette = ({ color, setColor }) => {
  const colorOptions = [
    {
      "id": 1,
      "name": "white",
      "hex": "#fff",
    },
    {
      "id": 2,
      "name": "red",
      "hex": "#f28b82",
    },
    {
      "id": 3,
      "name": "orange",
      "hex": "#fbbd08",
    },
    {
      "id": 4,
      "name": "yellow",
      "hex": "#fff478",
    },
    {
      "id": 5,
      "name": "green",
      "hex": "#ceff93",
    },
    {
      "id": 6,
      "name": "teal",
      "hex": "#a9ffec",
    },
    {
      "id": 7,
      "name": "sky-blue",
      "hex": "#cbeff9",
    },
    {
      "id": 8,
      "name": "blue",
      "hex": "#afccfa",
    },
    {
      "id": 9,
      "name": "purple",
      "hex": "#d8b0fc",
    },
    {
      "id": 10,
      "name": "pink",
      "hex": "#fdd1e9",
    },
    {
      "id": 11,
      "name": "brown",
      "hex": "#e8caab",
    },
    {
      "id": 12,
      "name": "gray",
      "hex": "#e9eaeb",
    },
  ]

  return (
    <div className="color-palette">
      {colorOptions.map((colorOption) => (
        <ColorButton key={colorOption.id} colorOption={colorOption} color={color} setColor={setColor} />
      ))}
    </div>
  )
}

export default ColorPalette
