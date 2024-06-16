import { useGlobalContext } from "src/Context/GlobalContext";
import { useModesContext } from "src/Context/ModesContext";
import { shortcuts } from "src/Data/staticData";
import SvgIcon from "../MiniComponents/SvgIcon";
import Shortcut from "./Shortcut";
import s from "./ShortcutsMenu.module.scss";

const ShortcutsMenu = () => {
  const { isShortcutMenuActive, toggleIsShortcutMenuActive } =
    useModesContext();
  const { setIsOverlayActive } = useGlobalContext();
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
        {shortcuts.map(({ keys, description }, index) => (
          <Shortcut key={index} keys={keys}>
            {description}
          </Shortcut>
        ))}
      </main>
    </div>
  );
};
export default ShortcutsMenu;
