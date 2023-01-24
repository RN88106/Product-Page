import { ColorModeScript, ChakraProvider, theme} from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import store from "./Redux/store"
import { Provider } from 'react-redux';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  
  <StrictMode>
     <Provider store={store}>
   
    <ColorModeScript />

    

  
    <ChakraProvider theme={theme}>
      
     


    <App />

  

   

    </ChakraProvider>
  
    </Provider>
   
  </StrictMode>
);

