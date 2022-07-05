// Core
import styled from "styled-components/native";

// Styles
import colors from "../../styles/colors";

// Utils
import calculateWidthElement from "../../utils/calculateWidthElement";

export const Container = styled.View`
  width: ${calculateWidthElement(58)}px;
  height: 400px;

  background-color: ${colors.white};

  z-index: 10;

  position: absolute;
  left: 50%;
  bottom: 0;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const AreaLine = styled.View`
  width: 100%;
  height: 50px;

  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  width: 85%;
  height: 15px;

  background-color: ${colors.black};

  border-radius: 20px;
`;

export const TextItem = styled.Text`
  font-size: 16px;
`;

export const TitleItem = styled(TextItem)`
  color: ${colors.yellowDark};
`;

export const ValueItem = styled(TextItem)`
  color: ${colors.black};
`;

export const AreaItem = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding-left: 24px;
  margin-bottom: 16px;
`;