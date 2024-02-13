import { useGlobalContext } from "../../../Context/GlobalContext";
import SvgIcon from "../MiniComponents/SvgIcon";
import Shortcut from "./Shortcut";
import styles from "./ShortcutsMenu.module.scss";

const ShortcutsMenu = () => {
  const {
    isShortcutMenuActive,
    toggleIsShortcutMenuActive,
    setIsOverlayActive,
  } = useGlobalContext();

  function closeShortcutMenu() {
    toggleIsShortcutMenuActive(false);
    setIsOverlayActive(false);
  }

  return (
    <div
      className={`${styles.shortcutsMenu} ${
        isShortcutMenuActive ? styles.active : ""
      }`}
    >
      <header>
        <span>Keyboard shortcuts</span>
        <button
          type="button"
          title="Close shortcuts menu"
          className={styles.closeShortcutMenuButton}
          onClick={closeShortcutMenu}
        >
          <SvgIcon name="xMark" />
        </button>
      </header>

      <hr />

      <main>
        <Shortcut keys={["G"]}>Toggle focus mode</Shortcut>
        <Shortcut keys={["F"]}>Toggle full-screen</Shortcut>
        <Shortcut keys={["P"]}>Play/Pause music</Shortcut>
        <Shortcut keys={["D"]}>Toggle dark/light mode</Shortcut>
        <Shortcut keys={["K"]}>Toggle shortcuts menu</Shortcut>
        <Shortcut keys={["S"]}>Scroll to bottom/top</Shortcut>
        <Shortcut keys={["E"]}>Extend sidebar</Shortcut>
        <Shortcut keys={["M"]}>Toggle sidebar for the smaller screens</Shortcut>
        <Shortcut keys={["Tap"]}>Focus system</Shortcut>
        <Shortcut keys={["Space"]}>Scroll down</Shortcut>
        <Shortcut keys={["Ctrl", "F"]}>Global search</Shortcut>
        {/* <Shortcut keys={[""]}></Shortcut> */}
      </main>
    </div>
  );
};
export default ShortcutsMenu;
