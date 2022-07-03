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
  const [ data, setData ] = useState(initialData);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ isStarted, setIsStarted ] = useState(true);
  const [ quantityFetch ] = useQuantityFetch();
  const [ valueCep ] = useCEP();

  const fetchData = useCallback(async () => {
    try {
      if (!isLoaded) {
        const responseCEP = await cepService.getByCEP(valueCep);
      
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
      setIsStarted(false);
    }
  }, [ valueCep ])
  // async function fetchData() {
  //   try {
  //     if (!isLoaded) {
  //       const responseCEP = await cepService.getByCEP(valueCep);
      
  //       const responseAddress = await locationServices.getByAddress({
  //         city: responseCEP.data.localidade,
  //         street: responseCEP.data.logradouro,
  //         state: responseCEP.data.uf
  //       })
        
  //       setData({
  //         ...data,
  //         latitude: Number(responseAddress.data[0].lat),
  //         longitude: Number(responseAddress.data[0].lon),
  //       });
  //     }
  //   } catch (error) {
  //     Alert.alert("Não foi possível buscar a localização do CEP")
  //     navigation.navigate("home");
  //   } finally {
  //     setIsLoaded(true);
  //     setIsStarted(false);
  //   }
  // }

  useEffect(() => {
    if (isStarted) {
      fetchData();
    }
  }, [ ]);

  useEffect(() => {
    fetchData();
  }, [ quantityFetch ]);

  return (
    <Container>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
      />
      <InputMap/>
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
    </Container>
  );
};

export default MapScreen;