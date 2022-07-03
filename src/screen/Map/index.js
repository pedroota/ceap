// Core
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

// Components
import { Map } from './styles';
import { Marker } from 'react-native-maps';
import { LoadingModal } from '../../components';

// Contexts
import { useCEP } from '../../contexts/CEPContext';

// Services
import { cepService } from '../../services/cep.service';
import { locationServices } from '../../services/location.service';

// Styles
import colors from '../../styles/colors';

const initialData = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

const MapScreen = () => {
  const navigation = useNavigation();
  const [ cepValue ] = useCEP();
  const [ data, setData ] = useState(initialData);
  const [ isLoaded, setIsLoaded ] = useState(false);

  async function fetchData() {
    try {
      if (!isLoaded) {
        const responseCEP = await cepService.getByCEP(cepValue);
      
        const responseAddress = await locationServices.getByAddress({
          city: responseCEP.data.localidade,
          street: responseCEP.data.logradouro,
          state: responseCEP.data.uf
        })
        
        setData({
          ...data,
          latitude: Number(responseAddress.data[0].lat),
          longitude: Number(responseAddress.data[0].lon),
        });
      }
    } catch (error) {
      Alert.alert("Não foi possível buscar a localização do CEP")
      navigation.navigate("home");
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, [ ]);

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
      />
      <Map region={data}>
        <Marker
          coordinate={data}
          title="Localização do CEP"
        />
      </Map>
      <LoadingModal
        visible={!isLoaded}
        color={colors.green}
      />
    </>
  );
};

export default MapScreen;