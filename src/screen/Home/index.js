// Components
import { 
  ButtonCTA, 
  ImageSvg,
  Title,
  Input
} from '../../components';
import { Screen } from './styles';

const Home = () => {
  return (
    <Screen>
      <ImageSvg
        type="logo"
        alt="Logo de Ceap"
        propsArea={{
          spaceTop: 24
        }}
      />
      <Title size={32}>
        Digite seu CEP
      </Title>
      <Input
        placeholder="CEP"
      />
      <ButtonCTA/>
    </Screen>
  );
};


export default Home;