// Modules
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from './screen/Home';
import SearchAddress from './screen/SearchAddress';
import MapScreen from './screen/Map';

// Contexts
import { CEPProvider } from './contexts/CEPContext';
import { QuantityFetchProvider } from './contexts/QuantityFetchContext';

const NativeStack = createNativeStackNavigator();

function RouterScreen() {
  return (
    <NavigationContainer>
      <CEPProvider>
        <QuantityFetchProvider>
          <NativeStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="home"
          >
            <NativeStack.Screen name="home" component={Home}/>
            <NativeStack.Screen name="search-address" component={SearchAddress}/>
            <NativeStack.Screen name="map" component={MapScreen}/>
          </NativeStack.Navigator>
        </QuantityFetchProvider>
      </CEPProvider>
    </NavigationContainer>
  )
}

export default RouterScreen;