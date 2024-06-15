import { createContext, useContext } from "react";

const HooksContext = createContext();

const HooksContextProvider = ({ children }) => {
  const data = {};

  return <HooksContext.Provider value={data}>{children}</HooksContext.Provider>;
};
export default HooksContextProvider;

export const useHooksContext = () => useContext(HooksContext);
