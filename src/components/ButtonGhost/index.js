// Core
import { useEffect } from "react";
import { Animated } from "react-native";

// Components
import { PressArea, Area, Title } from "./styles";

// Hooks
import useAnimate from "../../hooks/useAnimate";

const AreaAnimation = Animated.createAnimatedComponent(Area);

const ButtonGhost = ({ 
  children, 
  onPress, 
  spaceTop, 
  spaceBottom, 
  spaceLeft, 
  spaceRight 
}) => {
  const [ opacityValue, opacityAnimation ] = useAnimate({ to: 1 });
  const [ scaleValue ] = useAnimate({ from: 1 });

  useEffect(() => {
    opacityAnimation.start();
  }, []);

  function actionUser() {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.8,
        duration: 150,
        useNativeDriver: false
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false
      })
    ]).start();

    if (!!onPress) {
      onPress();
    }
  }

  return (
    <PressArea onPress={actionUser}>
      <AreaAnimation
        style={{
          opacity: opacityValue,
          transform: [
            { scale: scaleValue }
          ]
        }}
        spaceTop={spaceTop}
        spaceBottom={spaceBottom}
        spaceLeft={spaceLeft}
        spaceRight={spaceRight}
      >
        <Title>{ children }</Title>
      </AreaAnimation>
    </PressArea>
  )
};

export default ButtonGhost;