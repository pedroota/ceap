import { Span } from "./styles";

const Title = ({ children, ...props }) => {
  return (
    <Span { ...props }>
      { children }
    </Span>
  )
}

export default Title;