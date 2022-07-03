// Core
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const widthApp = Dimensions.get('window').width;

export const Container = styled.View`
  position: absolute;
  top: 50px;
  left: 50%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  transform: translateX(-${widthApp / 2}px);

  width: 100%;

  z-index: 10;
`;