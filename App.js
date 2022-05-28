// Modules
import { StyleSheet, Text, View, StatusBar } from 'react-native';

// Screens
import { Home } from './src/screen/Home';
import { Map } from './src/screen/Map';
import { SplashScreen } from './src/screen/SplashScreen';

const heightStatusBar = StatusBar.currentHeight;

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingVertical: heightStatusBar,
  }
})