import { useGlobalContext } from "src/Context/GlobalContext";
import useFunctionOnKey from "src/Hooks/useFunctionOnKey";
import { useModesContext } from "../../../Context/ModesContext";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";

const ShortcutsMode = () => {
  const { toggleIsShortcutMenuActive } = useModesContext();
  const { setIsOverlayActive } = useGlobalContext();
  useFunctionOnKey(() => toggleShortcutsMenu(), ["KeyK"], 300, true, true);

  function toggleShortcutsMenu() {
    toggleIsShortcutMenuActive();
    setIsOverlayActive((prevState) => !prevState);
  }

  return (
    <button
      type="button"
      aria-label="Shortcuts Menu"
      onClick={toggleShortcutsMenu}
    >
      <SvgIcon name="keyboard" />
      <ToolTip
        content="Shortcuts Menu"
        left="-125px"
        top="1.3px"
        arrowDir="right"
      />
    </button>
  );
};
export default ShortcutsMode;
