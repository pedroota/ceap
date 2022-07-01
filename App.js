// Modules
import { StatusBar } from 'react-native';

// styles
import colors from './src/styles/colors';

// Components
import Router from './src/router';

export default function App() {
  return (
    <>
      <Router/>
      <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
    </>
  );
}