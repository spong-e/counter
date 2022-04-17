import React, { useState } from "react";

interface ProviderProps {
    children: React.ReactNode;
}

const CountContext = React.createContext<CounterContext>({count: 0, decrementCountHandler: () => {}, incrementCountHandler: () => {}});

function Provider({children}: ProviderProps)  {
    const [count, setCount] = useState(0);
   
  
    const decrementCountHandler = () => {
      setCount(count - 1);
    }

    const incrementCountHandler = () => {
      setCount(count + 1);
    }
    

    return (  <CountContext.Provider value={{ count, incrementCountHandler, decrementCountHandler}}>
        {children}
      </CountContext.Provider> );
}

export { Provider, CountContext };