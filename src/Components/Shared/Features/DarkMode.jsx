import { toggleDarkModeColors } from "../../../Functions/projectFunctions";
import useToggle from "../../../Hooks/useToggle";
import styles from "./DarkMode.module.scss";

const DarkMode = () => {
  const [isDarkMode, toggleDarkMode] = useToggle();

  function handleDarkMode() {
    toggleDarkMode();
    toggleDarkModeColors(!isDarkMode);
  }

  return (
    <button
      type="button"
      className={styles.darkModeButton}
      onClick={handleDarkMode}
      title="Dark Mode"
    >
      {isDarkMode ?
      <i></i>
      :
      <i></i>
      }
    </button>
  );
};
export default DarkMode;
