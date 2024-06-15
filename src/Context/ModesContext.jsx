import { createContext, useContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import useToggle from "../Hooks/useToggle";

export const ModesContext = createContext();

const ModesContextProvider = ({ children }) => {
  const [isShortcutMenuActive, toggleIsShortcutMenuActive] = useToggle(false);

  const [isFocusModeActiveLocal, setIsFocusModeActive] =
    useLocalStorage("focus-mode");
  const [isDarkModeLocal, setIsDarkModeLocal] = useLocalStorage(
    "dark-mode",
    false
  );

  const data = {
    isShortcutMenuActive,
    toggleIsShortcutMenuActive,
    isFocusModeActiveLocal,
    setIsFocusModeActive,
    isDarkModeLocal,
    setIsDarkModeLocal,
  };

  return <ModesContext.Provider value={data}>{children}</ModesContext.Provider>;
};
export default ModesContextProvider;

export const useModesContext = () => useContext(ModesContext);
