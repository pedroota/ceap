// Core
import { Alert } from "react-native";
import { useEffect, useState } from "react";

// Components
import Input from "../Input";
import { Container } from "./styles";
import ButtonFetch from "../ButtonFetch";

// Contexts
import { useCEP } from "../../contexts/CEPContext";
import { useQuantityFetch } from "../../contexts/QuantityFetchContext";

// Utils
import Masks from "../../utils/masks";

const InputMap = ({ valueCep }) => {
  const [ cep, setCep ] = useState("");
  const [ _valueContextCep, changeValueContextCep ] = useCEP();
  let [ quantityFetch, changeQuantityFetch ] = useQuantityFetch();

  useEffect(() => {
    setCep(valueCep);
  }, []);

  function fetchCEP() {
    if (cep.length === 0) {
      Alert.alert("Preencha o campo de CEP");
      return false;
    }

    if (cep.length < 9) {
      Alert.alert("Preencha o resto do campo de CEP");
      return false;
    }
    
    changeValueContextCep(cep.replace("-", ""));
    changeQuantityFetch(quantityFetch += 1)
  }

  return (
    <Container>
      <Input
        width="70%"
        placeholder="Pesquisar CEP"
        value={Masks.cep(cep)}
        onChangeText={setCep}
        keyboardType="numeric"
      />
      <ButtonFetch onPress={fetchCEP}>
        Buscar
      </ButtonFetch>
    </Container>
  )
}

export default InputMap;