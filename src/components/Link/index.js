// Core
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { Animated } from "react-native";

// Components
import { Anchor, PressArea } from "./styles";

// Hooks
import useAnimate from "../../hooks/useAnimate";

const AnchorAnimation = Animated.createAnimatedComponent(Anchor);

const Link = ({ 
  children, 
  linkScreenName, 
  style 
}) => {
  const [ opacityValue, opacityAnimation ] = useAnimate({
    to: 1
  });
  const navigation = useNavigation();
  
  function nextScreen(screenName) {
    return () => {
      try {
        navigation.navigate(screenName);
      } catch (_error) {
        Alert.alert("Não foi possível ir para a próxima tela")
      }
    }
  }

  useEffect(() => {
    opacityAnimation.start();
  }, []);
  
  return (
    <PressArea onPress={nextScreen(linkScreenName)}>
      <AnchorAnimation 
        style={[
          style,
          {
            opacity: opacityValue
          }
        ]}
      >
        { children }
      </AnchorAnimation>
    </PressArea>
  )
};

export default Link;