// Core
import { useEffect } from "react";
import { Animated } from "react-native";

// Components
import { AreaInput } from "./styles";

// Hooks
import useAnimate from "../../hooks/useAnimate";

const AreaInputAnimated = Animated.createAnimatedComponent(AreaInput);

const Input = ({ 
  placeholder,
  value,
  onChangeText
}) => {
  const [ opacityValue, opacityAnimation ] = useAnimate({
    duration: 1000,
    from: 0,
    to: 1,
    type: "Value",
    useNativeDriver: false
  });

  useEffect(() => {
    opacityAnimation.start();
  }, []);

  return (
    <AreaInputAnimated
      style={{
        opacity: opacityValue
      }}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  )
}

export default Input;