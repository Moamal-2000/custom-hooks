import { createContext, useContext, useState } from "react";
import { hooksData } from "../Data/hooksData";
import useGetResizeWindow from "../Hooks/useGetResizeWindow";
import useKeyPress from "../Hooks/useKeyPress";
import useLocalStorage from "../Hooks/useLocalStorage";

const GlobalContextProvider = ({ children }) => {
  const [scrolledHook, setScrolledHook] = useState(hooksData[0].name);
  const [isSideBarActive, setIsSideBarActive] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [isNotFoundPageShown, setIsNotFoundPageShown] = useState(false);
  const [pressedKey] = useKeyPress();
  const { windowWidth } = useGetResizeWindow();

  const [isSideBarExtendedLocal, setIsSideBarExtended] =
    useLocalStorage("sidebar-extend");

  const lengthHooks = hooksData.length;
  const hooksPerPage = 5;
  const numbersOfPages = Math.ceil(lengthHooks / hooksPerPage);

  const data = {
    scrolledHook,
    setScrolledHook,
    isSideBarActive,
    setIsSideBarActive,
    isOverlayActive,
    setIsOverlayActive,
    numberOfHooks: lengthHooks,
    isSideBarExtendedLocal,
    setIsSideBarExtended,
    hooksPerPage,
    numbersOfPages,
    isNotFoundPageShown,
    setIsNotFoundPageShown,
    pressedKey,
    windowWidth,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
