// core
import styled, { css } from "styled-components/native";

// utils
import calculateWidthElement from "../../utils/calculateWidthElement";

// colors
import colors from "../../styles/colors";

const positionActive = css`
  position: absolute;
`;

export const AreaInput = styled.TextInput`
  width: ${calculateWidthElement(58)}px;

  border: 1px solid ${`${colors.black}90`};

  padding: 8px 16px;

  ${props => props.activePosition && positionActive};
  top: ${props => props.horizontal ? props.horizontal : "0"};
  left: ${props => props.vertical ? props.vertical : "0"};
  z-index: 10;

  /* transform: translateX(${calculateWidthElement(29)}px); */
`;