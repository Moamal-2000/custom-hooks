import { createContext, useContext } from "react";

export const ModesContext = createContext();

const ModesContextProvider = ({ children }) => {
  const data = {};

  return <ModesContext.Provider value={data}>{children}</ModesContext.Provider>;
};
export default ModesContextProvider;

export const useModesContext = () => useContext(ModesContext);
