import { useGlobalContext } from "../../../Context/GlobalContext";
import { hooksData } from "../../../Data/hooksData";
import styles from "./ActiveHooksMenu.module.scss";

const ActiveHooksMenu = () => {
  const {
    scrolledHook,
    setIsOverlayActive,
    setScrolledHook,
    setIsSideBarActive,
  } = useGlobalContext();

  return (
    <ul className={styles.hooksMenu}>
      {hooksData.map(({ name, id }) => (
        <li key={id} onClick={() => setIsOverlayActive(false)}>
          <a
            href={`#${name}-hook`}
            className={scrolledHook === name ? styles.active : ""}
            onClick={() => {
              setScrolledHook(name);
              setIsSideBarActive(false);
            }}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default ActiveHooksMenu;
