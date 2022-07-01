// Core
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { Screen } from './styles';

// Contexts
import { useCEP } from '../../contexts/CEPContext';

// Services
import { cepService } from '../../services/cep.service';

const Map = () => {
  const navigation = useNavigation();
  const [ cepValue ] = useCEP();
  const [ data, setData ] = useState({});

  async function fetchData() {
    try {
      const response = await cepService.getByCEP(cepValue);
  
      setData(response.data);
    } catch (error) {
      Alert.alert(
        "Error",
        "Não foi possível buscar o CEP"
      );
      navigation.navigate("home");
    }
  }

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Screen>

    </Screen>
  );
};

export default Map;