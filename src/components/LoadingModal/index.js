import { 
  Loading, 
  ModalView, 
  OpacityView 
} from "./styles";

const LoadingModal = ({ visible, color }) => {
  return (
    <ModalView visible={visible} transparent={true}>
      <OpacityView>
        <Loading size={48} color={color}/>
      </OpacityView>
    </ModalView>
  )
}

export default LoadingModal;