// Core
import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// Components
import { 
  ButtonCTA, 
  ImageSvg,
  Title,
  Input,
  Link
} from '../../components';
import { Screen, Area } from './styles';

// Hooks
import useAnimate from '../../hooks/useAnimate';

// Contexts
import { useCEP } from '../../contexts/CEPContext';

// Utils
import Masks from '../../utils/masks';

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

const Home = () => {
  const navigation = useNavigation();
  const [ valueInputCep, setValueInputCep ] = useState("");
  const [ _cep, changeCep ] = useCEP();
  const [ valueXY, XYAnimation ] = useAnimate(XY_CONFIG_ANIMATION);
  const [ opacityValue, opacityAnimation ] = useAnimate({to: 1});

  useEffect(() => {
    XYAnimation.start();
    opacityAnimation.start();

  }, []);
  
  function goMap() {
    if (valueInputCep.length < 9) {
      Alert.alert("Preencha o resto do CEP");
      return false;
    }

    changeCep(valueInputCep);

    navigation.navigate("map", { type: "CEP" });
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
        Digite seu CEP
      </Title>
      <Area>
        <Input
          placeholder="CEP"
          value={Masks.cep(valueInputCep)}
          onChangeText={setValueInputCep}
          keyboardType="numeric"
        />
        <Link 
          linkScreenName="search-address"
          style={{ marginTop: 16 }}
        >
          Esqueceu o seu CEP?
        </Link>
      </Area>
      <ButtonCTA
        onPress={goMap}
      />
    </Screen>
  );
};


export default Home;