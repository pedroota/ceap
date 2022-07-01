// Core
import { useEffect } from 'react';

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
  const [ valueXY, XYAnimation ] = useAnimate(XY_CONFIG_ANIMATION);
  const [ opacityValue, opacityAnimation ] = useAnimate({to: 1});

  useEffect(() => {
    XYAnimation.start();
    opacityAnimation.start();
  }, []);

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
        />
        <Link 
          linkScreenName="search-address"
          style={{ marginTop: 16 }}
        >
          Esqueceu o seu CEP?
        </Link>
      </Area>
      <ButtonCTA/>
    </Screen>
  );
};


export default Home;