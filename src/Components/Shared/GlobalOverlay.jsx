import { useGlobalContext } from "src/Context/GlobalContext";
import { useModesContext } from "src/Context/ModesContext";
import s from "./GlobalOverlay.module.scss";

const GlobalOverlay = () => {
  const { isOverlayActive, setIsOverlayActive, setIsSideBarActive } =
    useGlobalContext();
  const { toggleIsShortcutMenuActive } = useModesContext();
  const activeClass = isOverlayActive ? s.active : "";

  function handleOverlayClick() {
    setIsOverlayActive(false);
    setIsSideBarActive(false);
    toggleIsShortcutMenuActive(false);
  }

  return (
    <div
      onClick={handleOverlayClick}
      className={`${s.overlay} ${activeClass}`}
    ></div>
  );
};
export default GlobalOverlay;
