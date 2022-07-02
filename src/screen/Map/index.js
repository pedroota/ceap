// Core
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { Map } from './styles';

// Contexts
import { useCEP } from '../../contexts/CEPContext';

// Services
import { cepService } from '../../services/cep.service';
import { locationServices } from '../../services/location.service';

const MapScreen = () => {
  const navigation = useNavigation();
  const [ cepValue ] = useCEP();
  const [ data, setData ] = useState({});

  async function fetchData() {
    // try {
      const responseCEP = await cepService.getByCEP("01001000");
      const responseAddress = await locationServices.getByAddress({
        city: responseCEP.data.localidade,
        state: responseCEP.data.uf
      })
      console.log(responseAddress.data[0]);
      setData({
        latitude: Number(responseAddress.data[0].boundingbox[0]),
        longitude: Number(responseAddress.data[0].boundingbox[2]),
        latitudeDelta: Number(responseAddress.data[0].boundingbox[1]),
        longitudeDelta: Number(responseAddress.data[0].boundingbox[3]) 
      });

      // setData(response.data);
    // } catch (error) {
    //   Alert.alert(
    //     "Error",
    //     "Não foi possível buscar o CEP"
    //   );
    //   navigation.navigate("home");
    // }
  }

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Map
      style={{
        width: "100%",
        height: "100%"
      }}
      
      initialRegion={{
        latitude: data.latitude,
        longitude: data.longitude,
        latitudeDelta: data.latitudeDelta,
        longitudeDelta: data.longitudeDelta
        // latitude: data.latitude,
        // longitude: data.longitude,
        // latitudeDelta: 0,
        // longitudeDelta: 0,
      }}
    >

    </Map>
  );
};

export default MapScreen;