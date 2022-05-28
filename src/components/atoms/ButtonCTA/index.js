import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';

export const ButtonCTA = () => {
  return (
    <TouchableOpacity
      onPress={() => {console.log("Buscar")}}
      style={styles.container}
    >
      <Text style={styles.text}>
        BUSCAR
      </Text>
    </TouchableOpacity>
  );
};