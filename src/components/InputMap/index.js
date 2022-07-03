// Components
import Input from "../Input";
import { Container } from "./styles";
import ButtonFetch from "../ButtonFetch";

// Contexts
import { useCEP } from "../../contexts/CEPContext";

const InputMap = () => {
  const [ cepValue, changeCep ] = useCEP();

  return (
    <Container>
      <Input
        width="70%"
        placeholder="Pesquisar CEP"
        value={cepValue}
        onChangeText={changeCep}
      />
      <ButtonFetch>
        Buscar
      </ButtonFetch>
    </Container>
  )
}

export default InputMap;