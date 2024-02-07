import { useGlobalContext } from "../../../Context/GlobalContext";
import DarkMode from "./DarkMode";
import FocusMode from "./FocusMode";
import FullScreenMode from "./FullScreenMode";
import styles from "./Mods.module.scss";
import MusicTime from "./MusicTime";
import ScrollBottomTop from "./ScrollBottomTop";

const Mods = () => {
  const { isFocusModeActiveLocal } = useGlobalContext();

  return (
    <nav className={styles.modsContainer}>
      <div className={styles.buttonsWrapper}>
        <FocusMode />

        {!isFocusModeActiveLocal && (
          <>
            <FullScreenMode />
            <MusicTime />
            <DarkMode />
          </>
        )}
      </div>

      {!isFocusModeActiveLocal && <ScrollBottomTop />}
    </nav>
  );
};
export default Mods;
