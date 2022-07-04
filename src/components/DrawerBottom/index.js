// Modules
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, { 
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from "react-native-reanimated";
import calculateWidthElement from "../../utils/calculateWidthElement";

// Components
import { 
  Container, 
  AreaLine,
  Line 
} from "./styles";

const ContainerAnimation = Animated.createAnimatedComponent(Container);

const DrawerBottom = () => {
  const yValue = useSharedValue(252);
  const contextYValue = useSharedValue(0);
  const valueWidth = calculateWidthElement(58);

  const positionStyle = useAnimatedStyle(() => {

    return {
      transform: [
        { translateY: yValue.value },
        { translateX: (valueWidth / 2) * -1 }
      ]
    }
  });

  const gesture = Gesture.Pan()
    .onStart(() => {
      contextYValue.value = yValue.value;
    })
    .onChange((event) => {
      console.log(event.absoluteY);
      if (event.absoluteY >= 400 && event.absoluteY <= 597.5) {
        yValue.value = event.translationY + contextYValue.value;
      }
    })
    .onEnd((event) => {
      if (event.absoluteY <= 510) {
        yValue.value = withSpring(90);
      } else {
        yValue.value = withSpring(252);
      }
    });

  return (
    <GestureDetector gesture={gesture}>
      <ContainerAnimation
        style={positionStyle}
      >
        <AreaLine>
          <Line/>
        </AreaLine>
      </ContainerAnimation>
    </GestureDetector>
  )
}

export default DrawerBottom;