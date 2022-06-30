import { AreaInput } from "./styles";

const Input = ({ 
  placeholder,
  value,
  onChangeText
}) => {
  return (
    <AreaInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  )
}

export default Input;