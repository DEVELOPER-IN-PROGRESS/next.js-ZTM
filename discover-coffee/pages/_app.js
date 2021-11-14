import { createContext } from 'react/cjs/react.production.min'
import '../styles/globals.css'
  
const StoreContext = createContext(); 

const StoreProvider = ({ children}) =>  {
  const initialState = {
    latLong : '',
    coffeeStores : [] ,
  }; 

   return   <StoreContext.Provider value= {{ state : initialState  }}>
      { children }
     </StoreContext.Provider>
} ; 

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
        <Component {...pageProps} />
    </StoreProvider>
  ) ; 
 
}

export default MyApp
