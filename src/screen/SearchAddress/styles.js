// Core
import styled from 'styled-components/native'

// Styles
import colors from '../../styles/colors'

export const Screen = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.white};
`;

export const AreaButtons = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AreaInputs = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${colors.yellowDark};

  margin-bottom: 4px;
`;

export const FieldArea = styled.View`
  margin-bottom: 16px;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;