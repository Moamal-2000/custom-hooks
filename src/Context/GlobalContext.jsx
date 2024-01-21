import { createContext, useContext, useState } from "react";
import { hooksData } from "../Data/hooksData";

const GlobalContextProvider = ({ children }) => {
  const [scrolledHook, setScrolledHook] = useState(hooksData[0].name);
  const [isSideBarActive, setIsSideBarActive] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const numberOfHooks = hooksData.length;

  const data = {
    scrolledHook,
    setScrolledHook,
    isSideBarActive,
    setIsSideBarActive,
    isOverlayActive,
    setIsOverlayActive,
    numberOfHooks,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
