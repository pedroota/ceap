// Core
import styled from "styled-components/native";

// Utils
import calculateWidthElement from "../../utils/calculateWidthElement";

// Colors
import colors from "../../styles/colors";

export const PressArea = styled.Pressable``;

export const Area = styled.View`
  width: ${calculateWidthElement(58)}px;
  height: 46px;

  border: 2px solid ${colors.black};

  justify-content: center;
  align-items: center;

  margin-top: ${props => props.spaceTop ? `${props.spaceTop}px` : "0px"};
  margin-bottom: ${props => props.spaceBottom ? `${props.spaceBottom}px` : "0px"};
  margin-left: ${props => props.spaceLeft ? `${props.spaceLeft}px` : "0px"};
  margin-right: ${props => props.spaceRight ? `${props.spaceRight}px` : "0px"};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: ${colors.black};
`;