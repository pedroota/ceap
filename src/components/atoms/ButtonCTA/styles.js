import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../styles/colors';

function calculateWidthElement(size = 0) {
  return Dimensions.get("window").width - size;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: calculateWidthElement(24),
    height: 60,
    backgroundColor: colors.green,
    borderRadius: 60 / 1.5,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 25,
  },
  text: {
    color: '#21251E',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 3,
  }
})

export default styles;