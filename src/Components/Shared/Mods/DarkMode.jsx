import { useEffect } from "react";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import useLocalStorage from "../../../Hooks/useLocalStorage";

const DarkMode = () => {
  const [isDarkModeLocal, setIsDarkModeLocal] = useLocalStorage(
    "dark-mode",
    false
  );
  useFunctionOnKey(toggleDarkMode, "KeyD", true, true);

  function toggleDarkMode() {
    setIsDarkModeLocal(!isDarkModeLocal);
  }

  useEffect(() => {
    const method = isDarkModeLocal ? "add" : "remove";
    document.documentElement.classList[method]("light-mode");
  }, [isDarkModeLocal]);

  return (
    <button type="button" onClick={toggleDarkMode} title="Dark Mode">
      <i className={`fa-regular fa-${isDarkModeLocal ? "sun" : "moon"}`}></i>
    </button>
  );
};
export default DarkMode;
