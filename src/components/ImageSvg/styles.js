import styled from "styled-components/native";

export const Area = styled.View`
  margin-top: ${props => `${props.spaceTop ?? 0}px`};
  margin-bottom: ${props => `${props.spaceBottom ?? 0}px`};
  margin-left: ${props => `${props.spaceLeft ?? 0}px`};
  margin-right: ${props => `${props.spaceRight ?? 0}px`};
`;

export const Alt = styled.Text`
  font-size: 16px;
`;