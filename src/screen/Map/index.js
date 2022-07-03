// Core
import { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

// Components
import { Map, Container } from './styles';
import { Marker } from 'react-native-maps';
import { LoadingModal, InputMap } from '../../components';

// Contexts
import { useCEP } from '../../contexts/CEPContext';
import { useQuantityFetch } from '../../contexts/QuantityFetchContext';

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
  const [ data, setData ] = useState({
    cepData: {},
    locationData: []
  });
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ isStarted, setIsStarted ] = useState(true);
  const [ valueCep ] = useCEP();
  const [ quantityFetch ] = useQuantityFetch();

  const fetchData = useCallback(async () => {
    try {
      setIsLoaded(false);
      const responseCEP = await cepService.getByCEP(valueCep);

      const responseAddress = await locationServices.getByAddress({
        city: responseCEP.data.localidade,
        street: responseCEP.data.logradouro,
        state: responseCEP.data.uf
      })
      
      if (responseAddress.data.length === 0 ) {
        Alert.alert("Não foi possível encontrar nenhum endereço no mapa");

        return false;
      }

      setData({
        cepData: responseCEP.data,
        locationData: responseAddress.data
      });
    } catch (error) {
      Alert.alert("Error ao buscar as localizações do CEP")
      navigation.navigate("home");
    } finally {
      setIsLoaded(true);
    }
  }, [ valueCep ])

  useEffect(() => {
    fetchData();
  }, [ quantityFetch ]);

  return (
    <Container>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
      />
      <InputMap valueCep={valueCep}/>
      <Map region={{
        latitude: Number(data?.locationData[0]?.lat ?? 37.78825),
        longitude: Number(data?.locationData[0]?.lon ?? -122.4324),
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}>
        <Marker
          coordinate={{
            latitude: Number(data?.locationData[0]?.lat ?? 37.78825),
            longitude: Number(data?.locationData[0]?.lon ?? -122.4324),
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          title="Localização do CEP"
        />
      </Map>
      <LoadingModal
        visible={!isLoaded}
        color={colors.green}
      />
    </Container>
  );
};

export default MapScreen;