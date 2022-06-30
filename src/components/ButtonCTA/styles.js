// core
import styled from 'styled-components/native';
import calculateWidthElement from '../../utils/calculateWidthElement';

// colors
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  
  width: ${calculateWidthElement(58)}px;
  height: 60px;
  
  background-color: ${props => props.colorArea ? props.colorArea : colors.yellow};
  
  border-radius: ${60 / 1.5}px;
  
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 25px;
`;

export const Text = styled.Text`
  color: ${colors.black};
  
  font-weight: bold;
  font-size: 16px;
  
  letter-spacing: 3px;
`