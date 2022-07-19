import { createContext, ReactNode, useState } from "react";

interface MarkedContextProps {
  children: ReactNode;
}

interface  MarkedContextType {
  counter: number,
  setCounter: (newState: number) => void,
}

const markedCounter = {
  counter: 0,
  setCounter: () => {},
}

export const MarkedContext = createContext<MarkedContextType>(markedCounter)

export const MarkedContextProvider = ({ children }: MarkedContextProps) => {
  const [ counter, setCounter ] = useState(markedCounter.counter)

  return (
    <MarkedContext.Provider value={{counter, setCounter}}>
      {children}
    </MarkedContext.Provider>
  )
}