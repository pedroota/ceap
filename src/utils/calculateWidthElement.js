import { Dimensions } from 'react-native';

function calculateWidthElement(size = 0) {
  return Dimensions.get("window").width - size;
}

export default calculateWidthElement;