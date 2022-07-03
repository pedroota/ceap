import { 
  useContext, 
  createContext, 
  useState 
} from "react";

const QuantityFetchContext = createContext({});

export function QuantityFetchProvider({ children }) {
  const [ quantityFetch, setQuantityFetch ] = useState(0);
  
  function changeQuantityFetch(value) {
    setQuantityFetch(value);
  }

  return (
    <QuantityFetchContext.Provider 
      value={[
        quantityFetch,
        changeQuantityFetch
      ]}
    >
      { children }
    </QuantityFetchContext.Provider>
  )
}

export function useQuantityFetch() {
  return useContext(QuantityFetchContext);
}