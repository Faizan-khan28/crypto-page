import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import "@fontsource-variable/ubuntu-sans";
import { theme } from './index.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ChakraProvider
     theme={theme}
     >
      <App/>
     </ChakraProvider>
  </StrictMode>
)
