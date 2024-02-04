import useToggle from "../../../Hooks/useToggle";
import styles from "./DarkMode.module.scss";

const DarkMode = () => {
  const [isDarkMode, toggleDarkMode] = useToggle();

  function handleDarkMode() {
    const htmlElement = document.documentElement;
    toggleDarkMode();

    if (isDarkMode) {
      htmlElement.style.setProperty("--extra-dark-blue", "#eee");
      htmlElement.style.setProperty("--white", "#070b10");
      htmlElement.style.setProperty("--black2", "#fff");
      htmlElement.style.setProperty("--very-light-gray", "#2b2b2b");
    } else {
      htmlElement.style.setProperty("--extra-dark-blue", "#0a1119");
      htmlElement.style.setProperty("--white", "#fff");
      htmlElement.style.setProperty("--black2", "#2b2b2b");
      htmlElement.style.setProperty("--very-light-gray", "#f0f0f0");
    }
  }

  return (
    <button
      type="button"
      className={styles.darkModeButton}
      onClick={handleDarkMode}
      title="Dark Mode"
    >
      Dark
    </button>
  );
};
export default DarkMode;
