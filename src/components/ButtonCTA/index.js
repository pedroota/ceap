import { Pressable } from 'react-native';
import { Container, Text } from './styles';

const ButtonCTA = ({
  onPress,
  colorArea
}) => {
  return (
    <Pressable onPress={onPress}>
      <Container
        colorArea={colorArea}
      >
        <Text>
          BUSCAR
        </Text>
      </Container>
    </Pressable>
  );
};

export default ButtonCTA;