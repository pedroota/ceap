// Core
import { useEffect } from "react";
import { Animated } from "react-native";

// Components
import { Area, Alt } from "./styles";
import { IconLogo } from "../../svgs";

// Hooks
import useAnimate from "../../hooks/useAnimate";

const AreaAnimation = Animated.createAnimatedComponent(Area);

const configAnimation = {
  Component: Area,
  duration: 1000,
  from: 0,
  to: 1,
  type: "Value",
  useNativeDriver: false
};

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
  const [ opacityValue, opacityAnimation ] = useAnimate(configAnimation);

  useEffect(() => {
    opacityAnimation.start();
  }, []);

  if (!type) {
    return (
      <Alt>
        { alt ?? "Image sem nome" }
      </Alt>
    )
  }
  
  return (
    <AreaAnimation
      spaceTop={propsArea.spaceTop}
      spaceBottom={propsArea.spaceBottom}
      spaceLeft={propsArea.spaceLeft}
      spaceRight={propsArea.spaceRight}
      style={{ opacity: opacityValue }}
    >
      <Svg
        type={type}
        propsSvg={propsSvg}
      />
    </AreaAnimation>
  )
}

export default ImageSvg;