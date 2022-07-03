// Core
import { Alert } from "react-native";

// Components
import Input from "../Input";
import { Container } from "./styles";
import ButtonFetch from "../ButtonFetch";

// Contexts
import { useCEP } from "../../contexts/CEPContext";
import { useQuantityFetch } from "../../contexts/QuantityFetchContext";

// Utils
import Masks from "../../utils/masks";

const InputMap = () => {
  const [ cepValue, changeCep ] = useCEP();
  const [ _quantityFetch, changeQuantityFetch ] = useQuantityFetch();

  function fetchCEP() {
    if (cepValue.length === 0) {
      Alert.alert("Preencha o campo de CEP");
      return false;
    }

    if (cepValue.length < 9) {
      Alert.alert("Preencha o resto do campo de CEP");
      return false;
    }
    
    changeCep(cepValue.replace("-", ""))

    changeQuantityFetch(value => value += 1);
  }

  return (
    <Container>
      <Input
        width="70%"
        placeholder="Pesquisar CEP"
        value={Masks.cep(cepValue)}
        onChangeText={changeCep}
        keyboardType="numeric"
      />
      <ButtonFetch onPress={fetchCEP}>
        Buscar
      </ButtonFetch>
    </Container>
  )
}

export default InputMap;