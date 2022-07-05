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
  Line,
  AreaItem,
  TitleItem,
  ValueItem
} from "./styles";

const ContainerAnimation = Animated.createAnimatedComponent(Container);

const DrawerBottom = ({ 
  state, 
  city, 
  district, 
  street 
}) => {
  const yValue = useSharedValue(352);
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
      if (event.absoluteY >= 300 && event.absoluteY <= 597.5) {
        yValue.value = event.translationY + contextYValue.value;
      }
    })
    .onEnd((event) => {
      if (event.absoluteY <= 350) {
        yValue.value = withSpring(70);
      } else {
        yValue.value = withSpring(352);
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
        <AreaItem>
          <TitleItem>Estado</TitleItem>
          <ValueItem>{ state ?? "Informação não encontrada" }</ValueItem>
        </AreaItem>
        <AreaItem>
          <TitleItem>Cidade</TitleItem>
          <ValueItem>{ city ?? "Informação não encontrada" }</ValueItem>
        </AreaItem>
        <AreaItem>
          <TitleItem>Bairro</TitleItem>
          <ValueItem>{ district ?? "Informação não encontrada" }</ValueItem>
        </AreaItem>
        <AreaItem>
          <TitleItem>Rua</TitleItem>
          <ValueItem>{ street ?? "Informação não encontrada" }</ValueItem>
        </AreaItem>
      </ContainerAnimation>
    </GestureDetector>
  )
}

export default DrawerBottom;