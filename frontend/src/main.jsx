import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProgramContextProvider from './context/ProgramContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProgramContextProvider>
      <App />
    </ProgramContextProvider>
  </BrowserRouter>,
)
