import { useEffect } from "react";
import { toggleDarkModeColors } from "../../../Functions/projectFunctions";
import useLocalStorage from "../../../Hooks/useLocalStorage";
import styles from "./DarkMode.module.scss";

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
    <button
      type="button"
      className={styles.darkModeButton}
      onClick={handleDarkMode}
      title="Dark Mode"
    >
      {isDarkModeLocal ? <i></i> : <i></i>}
    </button>
  );
};
export default DarkMode;