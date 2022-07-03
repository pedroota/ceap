// Core
import { useEffect, useRef } from "react";
import { Area, PressArea } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { Animated } from "react-native";

// Styles
import colors from "../../styles/colors";

const AreaAnimation = Animated.createAnimatedComponent(Area);
const IconAnimation = Animated.createAnimatedComponent(AntDesign);

const ButtonFetch = ({ onPress }) => {
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const numberColorAnimation = useRef(new Animated.Value(0)).current;

  const TIMER_ANIMATION_MILISECONDS = 150;

  useEffect(() => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }, []);

  function applyAnimationClick() {
    Animated.sequence([
      Animated.timing(numberColorAnimation, {
        toValue: 1,
        duration: TIMER_ANIMATION_MILISECONDS,
        useNativeDriver: false
      }),
      Animated.timing(numberColorAnimation, {
        toValue: 0,
        duration: TIMER_ANIMATION_MILISECONDS,
        useNativeDriver: false
      }),
    ]).start()

    if (!!onPress) {
      onPress();
    }
  }
  
  return (
    <PressArea onPress={applyAnimationClick}>
      <AreaAnimation 
        style={{
          opacity: opacityAnimation,
          backgroundColor: numberColorAnimation.interpolate({
            inputRange: [ 0, 1 ],
            outputRange: [ `${colors.black}90`, colors.black ]
          })
        }}
      >
        <IconAnimation 
          name="search1" 
          size={24} 
          style={{
            color: numberColorAnimation.interpolate({
              inputRange: [ 0, 1 ],
              outputRange: [ `${colors.white}90`, colors.white ]
            })
          }}
        />
      </AreaAnimation>
    </PressArea>
  )
}

export default ButtonFetch;