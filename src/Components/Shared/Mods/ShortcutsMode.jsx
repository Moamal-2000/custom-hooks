import { useGlobalContext } from "../../../Context/GlobalContext";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import SvgIcon from "../MiniComponents/SvgIcon";

const ShortcutsMode = () => {
  const { setIsOverlayActive, toggleIsShortcutMenuActive } = useGlobalContext();
  useFunctionOnKey(() => toggleShortcutsMenu(), ["KeyK"], 300, true, true);

  function toggleShortcutsMenu() {
    toggleIsShortcutMenuActive();
    setIsOverlayActive((prevState) => !prevState);
  }

  return (
    <button type="button" title="Shortcuts Menu" onClick={toggleShortcutsMenu}>
      <SvgIcon name="keyboard" />
    </button>
  );
};
export default ShortcutsMode;
