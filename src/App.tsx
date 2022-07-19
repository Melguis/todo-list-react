import { Header } from './components/Header'

import { MarkedContextProvider } from './hooks/useMarked'

import './global.css'

function App() {

  return (
    <MarkedContextProvider>
      <Header />
    </MarkedContextProvider>
  )
}

export default App
