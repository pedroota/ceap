// core
import styled, { css } from "styled-components/native";

// utils
import calculateWidthElement from "../../utils/calculateWidthElement";

// colors
import colors from "../../styles/colors";

export const AreaInput = styled.TextInput`
  width: ${props => props.width ? props.width : `${calculateWidthElement(58)}px`};

  border: 1px solid ${`${colors.black}90`};

  padding: 8px 16px;

  z-index: 10;

  /* transform: translateX(-${calculateWidthElement(58) / 2}px); */
`;