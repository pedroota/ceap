// Core
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, Keyboard, Dimensions } from "react-native";

// Components
import { 
  ImageSvg,
  Input,
  Title,
  ButtonPrimary,
  ButtonGhost
} from "../../components";

import { 
  Screen, 
  AreaButtons, 
  AreaInputs,
  Label,
  FieldArea
} from "./styles";
import { Picker } from "@react-native-picker/picker";

// Hooks
import useAnimate from '../../hooks/useAnimate';

// Contexts
import { useQuantityFetch } from "../../contexts/QuantityFetchContext";
import { useAddress } from "../../contexts/AddressContext";

// Data
import jsonUFs from "../../data/json-estados-brasileiros.json";

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

const initialAddressFields = {
  street: "",
  state: "",
  city: ""
};

const widthApp = Dimensions.get("window").width;

const SearchAddress = () => {
  const navigation = useNavigation();
  const [ addressFields, setAddressFields ] = useState(initialAddressFields);
  const [ isHiddenElements, setIsHiddenElements ] = useState(false);
  let [ quantityFetch, changeQuantityFetch ] = useQuantityFetch();
  const [ _address, changeAddress ] = useAddress();

  const [ valueXY, XYAnimation ] = useAnimate(XY_CONFIG_ANIMATION);
  const [ opacityValue, opacityAnimation ] = useAnimate({to: 1});

  useEffect(() => {
    XYAnimation.start();
    opacityAnimation.start();

    const subscriptionShow = Keyboard.addListener("keyboardDidShow", () => {
      setIsHiddenElements(true);
    });

    const subscriptionHidden = Keyboard.addListener("keyboardDidHide", () => {
      setIsHiddenElements(false);
    });

    return () => {
      subscriptionShow.remove();
      subscriptionHidden.remove();
    }
  }, []);

  function goBack() {
    navigation.navigate("home");
  };

  function goMap() {
    if (addressFields.state.length === 0) {
      Alert.alert("Preencha o campo de estado");
      return false;
    }

    if (addressFields.city.length === 0) {
      Alert.alert("Preencha o campo de cidade");
      return false;
    }
    
    if (addressFields.street.length === 0) {
      Alert.alert("Preencha o campo de rua");
      return false;
    }

    changeAddress(addressFields);
    changeQuantityFetch(quantityFetch++);
    
    navigation.navigate("map", { type: "address" });
  }

  return (
    <Screen>
      {
        isHiddenElements
        ||
        <>
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
        </>
      }
      
      <AreaInputs>
        <FieldArea>
          <Label>Estado</Label>
          <Picker
            style={{
              width: widthApp - 58
            }}
            selectedValue={addressFields.state}
            onValueChange={item => setAddressFields({ ...addressFields, state: item })}
          >
            <Picker.Item
              value=""
              label="Selecione um estado"
            />
            {
              jsonUFs.UF.map(item => (
                <Picker.Item
                  label={`${item.nome} - ${item.sigla}`}
                  value={item.sigla}
                  key={item.sigla}
                />
              ))
            }
          </Picker>

        </FieldArea>
        <FieldArea>
          <Label>Cidade</Label>
          <Input
            placeholder="Cidade"
            value={addressFields.city}
            onChangeText={value => setAddressFields({ ...addressFields, city: value })}
          />
        </FieldArea>
        <FieldArea>
          <Label>Rua</Label>
          <Input
            placeholder="Rua"
            value={addressFields.street}
            onChangeText={value => setAddressFields({ ...addressFields, street: value })}
          />
        </FieldArea>
      </AreaInputs>
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