import { useEffect } from "react";
import useLocalStorage from "../../../Hooks/useLocalStorage";

const DarkMode = () => {
  const [isDarkModeLocal, setIsDarkModeLocal] = useLocalStorage(
    "dark-mode",
    false
  );

  function handleDarkMode() {
    setIsDarkModeLocal(!isDarkModeLocal);
  }

  useEffect(() => {
    const method = isDarkModeLocal ? "add" : "remove"
    document.documentElement.classList[method]("dark")
  }, [isDarkModeLocal]);

  return (
    <button type="button" onClick={handleDarkMode} title="Dark Mode">
      <i className={`fa-regular fa-${isDarkModeLocal ? "sun" : "moon"}`}></i>
    </button>
  );
};
export default DarkMode;
