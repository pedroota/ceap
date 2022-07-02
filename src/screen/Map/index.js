// Core
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { Map } from './styles';
import { Marker } from 'react-native-maps';

// Contexts
import { useCEP } from '../../contexts/CEPContext';

// Services
import { cepService } from '../../services/cep.service';
import { locationServices } from '../../services/location.service';

const MapScreen = () => {
  const navigation = useNavigation();
  const [ cepValue ] = useCEP();
  const [ data, setData ] = useState({});
  const [ isLoaded, setIsLoaded ] = useState(false);

  async function fetchData() {
    try {
      const responseCEP = await cepService.getByCEP(cepValue);
      
      console.log(responseCEP.data);
      
      const responseAddress = await locationServices.getByAddress({
        city: responseCEP.data.localidade,
        street: responseCEP.data.logradouro,
        state: responseCEP.data.uf
      })
      
      console.log(responseAddress)

      setData({
        latitude: Number(responseAddress.data[0].lat),
        longitude: Number(responseAddress.data[0].lon),
      });
    } catch (error) {
      Alert.alert("Não foi possível buscar a localização do CEP")
      navigation.navigate("home");
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, [ fetchData ]);

  return (
    <Map      
      initialRegion={
        isLoaded
        ?
        {
          latitude: data.latitude,
          longitude: data.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
        :
        {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      }
    >
      <Marker
        coordinate={
          isLoaded
          ?
          {
            latitude: data.latitude,
            longitude: data.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }
          :
          {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }
        }
        title="Localização do CEP"
        description=""
      />
    </Map>
  );
};

export default MapScreen;