import { createContext, useContext, useState } from "react";
import { hooksData } from "../Data/hooksData";
import useLocalStorage from "../Hooks/useLocalStorage";

const GlobalContextProvider = ({ children }) => {
  const [scrolledHook, setScrolledHook] = useState(hooksData[0].name);
  const [isSideBarActive, setIsSideBarActive] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [isSideBarExtendedLocal, setIsSideBarExtended] =
    useLocalStorage("sidebar-extend");
  const [isFocusModeActiveLocal, setIsFocusModeActive] =
    useLocalStorage("focus-mode");
  const numberOfHooks = hooksData.length;
  const numbersOfPages = [
    ...new Set(hooksData.map((hookData) => hookData.page)),
  ];

  const data = {
    scrolledHook,
    setScrolledHook,
    isSideBarActive,
    setIsSideBarActive,
    isOverlayActive,
    setIsOverlayActive,
    numberOfHooks,
    isSideBarExtendedLocal,
    setIsSideBarExtended,
    isFocusModeActiveLocal,
    setIsFocusModeActive,
    numbersOfPages,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
