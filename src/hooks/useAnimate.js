import { useRef } from "react";
import { Animated } from "react-native";

function useAnimate({ 
  type = "Value", 
  from = 0, 
  to, 
  duration = 1000, 
  useNativeDriver = false,
  typeAnimation = 'timing'
}) {
  let valueAnimated;
  let Animation;

  if (!!type) {
    valueAnimated = useRef(new Animated[type](from)).current;
  } else {
    return false;
  }

  if (!!to) {
    Animation = Animated[typeAnimation](valueAnimated, {
      toValue: to, 
      duration, 
      useNativeDriver
    });
  }

  return [
    valueAnimated,
    Animation
  ]
}

export default useAnimate;