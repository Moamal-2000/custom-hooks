import { useGlobalContext } from "../../Context/GlobalContext";
import s from "./GlobalOverlay.module.scss";

const GlobalOverlay = () => {
  const {
    isOverlayActive,
    setIsOverlayActive,
    setIsSideBarActive,
    toggleIsShortcutMenuActive,
  } = useGlobalContext();
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
