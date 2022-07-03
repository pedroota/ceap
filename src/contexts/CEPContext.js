import { 
  useContext, 
  createContext, 
  useState 
} from "react";

const CEPContext = createContext({});

export function CEPProvider({ children }) {
  const [ cep, setCep ] = useState("");
  const [ quantityFetch, setQuantityFetch ] = useState(0);
  
  function changeCep(cep) {
    setCep(cep);
  }

  function changeQuantityFetch(value) {
    setQuantityFetch(value);
  }

  return (
    <CEPContext.Provider 
      value={[
        cep,
        changeCep,
        quantityFetch,
        changeQuantityFetch
      ]}
    >
      { children }
    </CEPContext.Provider>
  )
}

export function useCEP() {
  return useContext(CEPContext);
}