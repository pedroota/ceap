// Modules
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, { 
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from "react-native-reanimated";
import calculateWidthElement from "../../utils/calculateWidthElement";
import { Dimensions } from "react-native";

/**
 * Vídeo de referência
 * https://www.youtube.com/watch?v=KvRqsRwpwhY&t=1158s
 */

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
  const heightApp = Dimensions.get("window").height;

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
      yValue.value = event.translationY + contextYValue.value;
      yValue.value = Math.max(yValue.value, heightApp / 10);
    })
    .onEnd((event) => {
      yValue.value = withSpring(heightApp / 1.82);
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