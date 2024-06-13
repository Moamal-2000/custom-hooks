import { useGlobalContext } from "../../../Context/GlobalContext";
import SvgIcon from "../MiniComponents/SvgIcon";
import Shortcut from "./Shortcut";
import s from "./ShortcutsMenu.module.scss";

const ShortcutsMenu = () => {
  const {
    isShortcutMenuActive,
    toggleIsShortcutMenuActive,
    setIsOverlayActive,
    numbersOfPages,
  } = useGlobalContext();
  const pagesKeys = Array.from(
    { length: numbersOfPages },
    (_, i) => `Num${i + 1}`
  );
  const activeClass = isShortcutMenuActive ? s.active : "";

  function closeShortcutMenu() {
    toggleIsShortcutMenuActive(false);
    setIsOverlayActive(false);
  }

  return (
    <div className={`${s.shortcutsMenu} ${activeClass}`}>
      <header>
        <span>Keyboard shortcuts</span>
        <button
          type="button"
          title="Close shortcuts menu"
          className={s.closeShortcutMenuButton}
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
        <Shortcut keys={["R"]}>Go to website's repository</Shortcut>
        <Shortcut keys={["S"]}>Scroll to bottom/top</Shortcut>
        <Shortcut keys={["E"]}>Extend sidebar</Shortcut>
        <Shortcut keys={pagesKeys}>Navigate between pages</Shortcut>
        <Shortcut keys={["M"]}>Toggle sidebar for the smaller screens</Shortcut>
        <Shortcut keys={["Tap"]}>Focus system</Shortcut>
        <Shortcut keys={["Space"]}>Scroll down</Shortcut>
        <Shortcut keys={["Ctrl", "F"]}>Global search</Shortcut>
        <Shortcut keys={["Ctrl", "P"]}>Print the website</Shortcut>
      </main>
    </div>
  );
};
export default ShortcutsMenu;
