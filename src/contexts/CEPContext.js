import { 
  useContext, 
  createContext, 
  useState 
} from "react";

const CEPContext = createContext({});

export function CEPProvider({ children }) {
  const [ cep, setCep ] = useState({});
  
  function changeCep(cep) {
    setCep(cep);
  }

  return (
    <CEPContext.Provider 
      value={[
        cep,
        changeCep
      ]}
    >
      { children }
    </CEPContext.Provider>
  )
}

export function useCEP() {
  return useContext(CEPContext);
}