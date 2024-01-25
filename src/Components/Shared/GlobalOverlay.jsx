import { useGlobalContext } from "../../Context/GlobalContext";
import styles from "./GlobalOverlay.module.scss";

const GlobalOverlay = () => {
  const { isOverlayActive, setIsOverlayActive, setIsSideBarActive } = useGlobalContext();

  function handleOverlayClick() {
    setIsOverlayActive(false)
    setIsSideBarActive(false)
  }

  return (
    <div
      onClick={handleOverlayClick}
      className={`${styles.overlay} ${isOverlayActive ? styles.active : ""}`}
    ></div>
  );
};
export default GlobalOverlay;
