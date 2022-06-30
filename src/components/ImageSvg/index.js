// Components
import { Area, Alt } from "./styles";
import { IconLogo } from "../../svgs";

function Svg({ type, propsSvg }) {
  switch (type) {
    default:
    case "logo":
        return <IconLogo { ...propsSvg }/>
  }
}

const ImageSvg = ({ 
  propsArea, 
  propsSvg, 
  type, 
  alt 
}) => {
  if (!type) {
    return (
      <Alt>
        { alt ?? "Image sem nome" }
      </Alt>
    )
  }
  
  return (
    <Area { ...propsArea }>
      <Svg
        type={type}
        propsSvg={propsSvg}
      />
    </Area>
  )
}

export default ImageSvg;