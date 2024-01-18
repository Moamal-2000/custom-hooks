import { createContext, useContext, useState } from "react";
import { hooksData } from "../Data/hooksData";

const GlobalContextProvider = ({ children }) => {
  const [scrolledHook, setScrolledHook] = useState(hooksData[0].name);

  const data = { scrolledHook, setScrolledHook };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
