import { useGlobalContext } from "../../Context/GlobalContext";
import styles from "./GlobalOverlay.module.scss";

const GlobalOverlay = () => {
  const {
    isOverlayActive,
    setIsOverlayActive,
    setIsSideBarActive,
    toggleIsShortcutMenuActive,
  } = useGlobalContext();
  const activeClass = isOverlayActive ? styles.active : "";

  function handleOverlayClick() {
    setIsOverlayActive(false);
    setIsSideBarActive(false);
    toggleIsShortcutMenuActive(false)
  }

  return (
    <div
      onClick={handleOverlayClick}
      className={`${styles.overlay} ${activeClass}`}
    ></div>
  );
};
export default GlobalOverlay;
