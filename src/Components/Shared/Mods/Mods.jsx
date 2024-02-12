import { useGlobalContext } from "../../../Context/GlobalContext";
import DarkMode from "./DarkMode";
import FocusMode from "./FocusMode";
import FullScreenMode from "./FullScreenMode";
import styles from "./Mods.module.scss";
import MusicTime from "./MusicTime";
import ScrollBottomTop from "./ScrollBottomTop";
import ShortcutsMode from "./ShortcutsMode";

const Mods = () => {
  const { isFocusModeActiveLocal } = useGlobalContext();
  const focusModeClass = isFocusModeActiveLocal ? styles.focusMode : "";

  return (
    <nav className={styles.modsContainer}>
      <div className={styles.buttonsWrapper}>
        <FocusMode />

        <div className={`${styles.hidedButtonsOnFocusMode} ${focusModeClass}`}>
          <FullScreenMode />
          <MusicTime />
          <DarkMode />
          <ShortcutsMode />
        </div>
      </div>

      {!isFocusModeActiveLocal && <ScrollBottomTop />}
    </nav>
  );
};
export default Mods;
