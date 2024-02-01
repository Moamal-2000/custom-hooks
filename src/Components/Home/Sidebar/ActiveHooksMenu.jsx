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

  function handleClickLink(hookName) {
    setScrolledHook(hookName);
    setIsSideBarActive(false);
    setIsOverlayActive(false);
  }

  return (
    <ul className={styles.hooksMenu}>
      {hooksData.map(({ name, id }) => (
        <li key={id}>
          <a
            href={`#${name}-hook`}
            className={scrolledHook === name ? styles.active : ""}
            onClick={() => handleClickLink(name)}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default ActiveHooksMenu;
