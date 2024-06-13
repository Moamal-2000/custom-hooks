import { useGlobalContext } from "../../../Context/GlobalContext";
import DarkMode from "./DarkMode";
import FocusMode from "./FocusMode";
import FullScreenMode from "./FullScreenMode";
import s from "./Mods.module.scss";
import MusicTime from "./MusicTime";
import ScrollBottomTop from "./ScrollBottomTop";
import ShortcutsMode from "./ShortcutsMode";
import StarRepo from "./StarRepo";

const Mods = () => {
  const { isFocusModeActiveLocal } = useGlobalContext();
  const focusModeClass = isFocusModeActiveLocal ? s.focusMode : "";

  return (
    <nav className={s.modsContainer}>
      <div className={s.buttonsWrapper}>
        <FocusMode />

        <div className={`${s.hidedButtonsOnFocusMode} ${focusModeClass}`}>
          <FullScreenMode />
          <MusicTime />
          <DarkMode />
          <ShortcutsMode />
          <StarRepo />
        </div>
      </div>

      {!isFocusModeActiveLocal && <ScrollBottomTop />}
    </nav>
  );
};
export default Mods;
