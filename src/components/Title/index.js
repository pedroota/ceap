// core
import { useEffect } from "react";
import { Animated } from "react-native";

// components
import { Span } from "./styles";

// hooks
import useAnimate from "../../hooks/useAnimate";

const SpanAnimation = Animated.createAnimatedComponent(Span);

const configAnimationOpacity = { 
  duration: 1000,
  from: 0,
  to: 1,
  type: "Value",
  useNativeDriver: false
}

const Title = ({ children, size }) => {
  const [ opacityValue, opacityAnimation ] = useAnimate(configAnimationOpacity);
  
  useEffect(() => {
    opacityAnimation.start();
  }, []);

  return (
    <SpanAnimation 
      size={size}
      style={{
        opacity: opacityValue
      }}
    >
      { children }
    </SpanAnimation>
  )
}

export default Title;