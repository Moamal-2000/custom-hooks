import { createContext, useContext } from "react";

const HooksContextProvider = ({ children }) => {
  const data = {};

  return <HooksContext.Provider value={data}>{children}</HooksContext.Provider>;
};

export default HooksContextProvider;
const HooksContext = createContext();
export const useHooksContext = () => useContext(HooksContext);
