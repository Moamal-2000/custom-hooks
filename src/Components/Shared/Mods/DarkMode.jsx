import { useEffect } from "react";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import useLocalStorage from "../../../Hooks/useLocalStorage";

const DarkMode = () => {
  const [isDarkModeLocal, setIsDarkModeLocal] = useLocalStorage(
    "dark-mode",
    false
  );
  useFunctionOnKey(toggleDarkMode, "KeyD", true, true);
  let noun = isDarkModeLocal ? "Dark" : "Light";

  function toggleDarkMode() {
    setIsDarkModeLocal(!isDarkModeLocal);
  }

  useEffect(() => {
    const method = isDarkModeLocal ? "add" : "remove";
    document.documentElement.classList[method]("light-mode");
  }, [isDarkModeLocal]);

  return (
    <button type="button" onClick={toggleDarkMode} title={`${noun} Mode`}>
      <i className={`fa-regular fa-${isDarkModeLocal ? "moon" : "sun"}`}></i>
    </button>
  );
};
export default DarkMode;
