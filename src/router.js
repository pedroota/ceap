// Modules
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from './screen/Home';
import SearchAddress from './screen/SearchAddress';
import Map from './screen/Map';

// Contexts
import { CEPProvider } from './contexts/CEPContext';

const NativeStack = createNativeStackNavigator();

function RouterScreen() {
  return (
    <NavigationContainer>
      <CEPProvider>
        <NativeStack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="home"
        >
          <NativeStack.Screen name="home" component={Home}/>
          <NativeStack.Screen name="search-address" component={SearchAddress}/>
          <NativeStack.Screen name="map" component={Map}/>
        </NativeStack.Navigator>
      </CEPProvider>
    </NavigationContainer>
  )
}

export default RouterScreen;