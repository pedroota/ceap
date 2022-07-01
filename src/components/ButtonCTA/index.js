// core
import { useEffect } from 'react';
import { Animated } from 'react-native';

// components
import { Pressable } from 'react-native';
import { Container, Text } from './styles';

// hooks
import useAnimate from '../../hooks/useAnimate';

const ContainerAnimation = Animated.createAnimatedComponent(Container);

const configUseAnimated = {
  type: "Value",
  duration: 1000,
  from: 0,
  to: 1,
  useNativeDriver: false,
};

const ButtonCTA = ({
  onPress,
  colorArea
}) => {
  const [ 
    opacityValue, 
    opacityAnimation 
  ] = useAnimate(configUseAnimated);

  useEffect(() => {
    opacityAnimation.start();
  }, []);

  return (
    <Pressable onPress={onPress}>
      <ContainerAnimation
        colorArea={colorArea}
        style={{
          opacity: opacityValue
        }}
      >
        <Text>
          BUSCAR
        </Text>
      </ContainerAnimation>
    </Pressable>
  );
};

export default ButtonCTA;