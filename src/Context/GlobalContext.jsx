import { createContext, useContext, useState } from "react";
import { hooksData } from "../Data/hooksData";
import useKeyPress from "../Hooks/useKeyPress";
import useLocalStorage from "../Hooks/useLocalStorage";
import useToggle from "../Hooks/useToggle";

const GlobalContextProvider = ({ children }) => {
  const [scrolledHook, setScrolledHook] = useState(hooksData[0].name);
  const [isSideBarActive, setIsSideBarActive] = useState(false);
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [isNotFoundPageShown, setIsNotFoundPageShown] = useState(false);
  const [isShortcutMenuActive, toggleIsShortcutMenuActive] = useToggle(false);
  const [pressedKey, setPressedKey] = useKeyPress();

  const [isSideBarExtendedLocal, setIsSideBarExtended] =
    useLocalStorage("sidebar-extend");
  const [isFocusModeActiveLocal, setIsFocusModeActive] =
    useLocalStorage("focus-mode");
  const [isDarkModeLocal, setIsDarkModeLocal] = useLocalStorage(
    "dark-mode",
    false
  );

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
    isFocusModeActiveLocal,
    setIsFocusModeActive,
    isDarkModeLocal,
    setIsDarkModeLocal,
    hooksPerPage,
    numbersOfPages,
    isNotFoundPageShown,
    setIsNotFoundPageShown,
    isShortcutMenuActive,
    toggleIsShortcutMenuActive,
    pressedKey,
    setPressedKey
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
