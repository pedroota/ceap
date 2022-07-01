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

  background-color: ${colors.green};

  justify-content: center;
  align-items: center;

  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: ${colors.white};
`;