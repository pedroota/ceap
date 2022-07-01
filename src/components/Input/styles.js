// core
import styled from "styled-components/native";

// utils
import calculateWidthElement from "../../utils/calculateWidthElement";

// colors
import colors from "../../styles/colors";

export const AreaInput = styled.TextInput`
  width: ${calculateWidthElement(58)}px;

  border: 1px solid ${`${colors.black}90`};

  padding: 8px 16px;
`;