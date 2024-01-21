import { useGlobalContext } from "../../Context/GlobalContext";
import styles from "./GlobalOverlay.module.scss";

const GlobalOverlay = () => {
  const { isOverlayActive, setIsOverlayActive } = useGlobalContext();

  return (
    <div
      onClick={() => setIsOverlayActive(false)}
      className={`${styles.overlay} ${isOverlayActive ? styles.active : ""}`}
    ></div>
  );
};
export default GlobalOverlay;
