import { createContext, useState, useContext } from 'react';
export const CounterContext = createContext();
// hooks that anyone makes has to start with the word "use"
// this allows us to call this hook in any child component
// wrapped by the "Provider" passed into useContext
// its value will be whatever value we pass
// as a prop labeled "value: into the "Provider Component"
// this hook needs to be called in a component
// wrapped by the Provider Component
export const useCounter = () => useContext(CounterContext);

const CounterProvider = ({ children }) => {
  const [ counter, setCounter ] = useState(420);

  return (
    <CounterContext.Provider
      value={{
        counter,
        setCounter,
        isMannyCool: 'hell nah',
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;