import { useGlobalContext } from "../../../Context/GlobalContext";
import useToggle from "../../../Hooks/useToggle";
import SvgIcon from "../MiniComponents/SvgIcon";
import Shortcut from "./Shortcut";
import styles from "./ShortcutsMode.module.scss";

const ShortcutsMode = () => {
  const [isShortcutMenuActive, toggleIsShortcutMenuActive] = useToggle(false);
  const { isOverlayActive, setIsOverlayActive } = useGlobalContext();

  function toggleShortcutsMenu() {
    toggleIsShortcutMenuActive();
  }

  return (
    <>
      <button
        className={styles.shortcutsButton}
        type="button"
        onClick={toggleShortcutsMenu}
      >
        <SvgIcon name="keyboard" />
      </button>

      <div className={styles.shortcutsMenu}>
        <header>
          <span>Keyboard shortcuts</span>
          <SvgIcon name="xMark" />
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
          <Shortcut keys={["Space"]}>.....</Shortcut>
          {/* <Shortcut keys={[""]}></Shortcut> */}
        </main>
      </div>
    </>
  );
};
export default ShortcutsMode;
