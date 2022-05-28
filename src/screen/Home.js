// Modules
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import { ButtonCTA } from '../components/atoms/ButtonCTA';

// Styles
import colors from '../styles/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <ButtonCTA />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});

export default Home;