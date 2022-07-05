import { 
  createContext, 
  useContext,
  useState
} from "react";

const AddressContext = createContext({});

export function AddressProvider({ children }) {
  const [ address, setAddress ] = useState({
    street: "",
    state: "",
    city: ""
  });

  function changeAddress({ street, state, city }) {
    const newData = {};

    if (!!street) {
      newData.street = street;
    }
    
    if (!!state) {
      newData.state = state;
    }

    if (!!city) {
      newData.city = city;
    }

    setAddress({
      ...address,
      ...newData
    });
  }
  
  return (
    <AddressContext.Provider value={[ address, changeAddress ]}>
      { children }
    </AddressContext.Provider>
  )
}

export function useAddress() {
  return useContext(AddressContext);
}