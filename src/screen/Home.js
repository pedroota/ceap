import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonCTA } from '../components/atoms/ButtonCTA';
import colors from '../styles/colors';

export const Home = () => {
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