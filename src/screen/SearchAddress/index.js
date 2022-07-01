// Core
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

// Components
import { 
  ImageSvg,
  Input,
  Title,
  ButtonPrimary,
  ButtonGhost
} from "../../components";
import { Screen, AreaButtons } from "./styles";

// Hooks
import useAnimate from '../../hooks/useAnimate';

const XY_CONFIG_ANIMATION = {
  type: "ValueXY",
  from: {
    x: 0,
    y: -40
  },
  to: {
    x: 0,
    y: 0
  },
  useNativeDriver: false,
  duration: 1000,
  typeAnimation: "timing"
};

const SearchAddress = () => {
  const navigation = useNavigation();

  const [ valueXY, XYAnimation ] = useAnimate(XY_CONFIG_ANIMATION);
  const [ opacityValue, opacityAnimation ] = useAnimate({to: 1});

  useEffect(() => {
    XYAnimation.start();
    opacityAnimation.start();
  }, []);

  function goBack() {
    navigation.navigate("home");
  };

  function goMap() {
    navigation.navigate("map");
  }

  return (
    <Screen>
      <ImageSvg
        type="logo"
        alt="Logo de Ceap"
        propsArea={{
          spaceTop: 48
        }}
        propsContainerSvg={{
          style: [
            {
              opacity: opacityValue
            },
            valueXY.getLayout()
          ]
        }}
      />
      <Title size={32}>
        Digite um endereço
      </Title>
      <Input
        placeholder="Endereço"
      />
      <AreaButtons>
        <ButtonGhost 
          spaceBottom={8}
          onPress={goBack}
        >
          VOLTAR
        </ButtonGhost>
        <ButtonPrimary onPress={goMap}>
          PROCURAR
        </ButtonPrimary>
      </AreaButtons>
    </Screen>
  );
};

export default SearchAddress;