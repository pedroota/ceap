import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Screens
import { Home } from './src/screen/Home';
import { Map } from './src/screen/Map';
import { SplashScreen } from './src/screen/SplashScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SplashScreen />
      <Home />
      <Map />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9CEC5B',
  }
})