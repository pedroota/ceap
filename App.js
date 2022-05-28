// Modules
import { SafeAreaView, StatusBar } from 'react-native';

// styles
import colors from './src/styles/colors';

// Components
import Router from './src/router';

const heightStatusBar = StatusBar?.currentHeight;

export default function App() {
  return (
    <>
      <Router/>
      <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
    </>
  );
}