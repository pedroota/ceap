// core
import styled from "styled-components/native";

// colors
import colors from "../../styles/colors";

export const Span = styled.Text`
  font-size: ${props => `${props.size ?? 16}px`};

  color: ${colors.black};
`;