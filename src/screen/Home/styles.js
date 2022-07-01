import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const Screen = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.white};
`;

export const Area = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;