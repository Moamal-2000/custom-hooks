import { useEffect } from "react";
import { toggleDarkModeColors } from "../../../Functions/projectFunctions";
import useLocalStorage from "../../../Hooks/useLocalStorage";

const DarkMode = () => {
  const [isDarkModeLocal, setIsDarkModeLocal] = useLocalStorage(
    "dark-mode",
    false
  );

  function handleDarkMode() {
    setIsDarkModeLocal(!isDarkModeLocal);
    toggleDarkModeColors(!isDarkModeLocal);
  }

  useEffect(() => {
    toggleDarkModeColors(isDarkModeLocal);
  }, [isDarkModeLocal]);

  return (
    <button type="button" onClick={handleDarkMode} title="Dark Mode">
      <i className={`fa-regular fa-${isDarkModeLocal ? "sun" : "moon"}`}></i>
    </button>
  );
};
export default DarkMode;
