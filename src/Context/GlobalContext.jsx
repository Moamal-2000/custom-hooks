import { createContext, useContext, useState } from "react";
import useGetResizeWindow from "../Hooks/useGetResizeWindow";
import useKeyPress from "../Hooks/useKeyPress";
import useLocalStorage from "../Hooks/useLocalStorage";

const GlobalContextProvider = ({ children }) => {
  const [isSideBarExtendedLocal, setIsSideBarExtended] = useLocalStorage("sidebar-extend");
  const [isSideBarActive, setIsSideBarActive] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [isNotFoundPageShown, setIsNotFoundPageShown] = useState(false);
  const { windowWidth } = useGetResizeWindow();
  const [pressedKey] = useKeyPress();

  const data = {
    isSideBarExtendedLocal,
    setIsSideBarExtended,
    isSideBarActive,
    setIsSideBarActive,
    isOverlayActive,
    setIsOverlayActive,
    isNotFoundPageShown,
    setIsNotFoundPageShown,
    windowWidth,
    pressedKey,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
