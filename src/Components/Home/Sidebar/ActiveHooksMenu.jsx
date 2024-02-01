import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { hooksData } from "../../../Data/hooksData";
import styles from "./ActiveHooksMenu.module.scss";

const ActiveHooksMenu = () => {
  let { id } = useParams();
  if (!id) id = 1;

  const pageHooksData = hooksData.filter((hookData) => hookData?.page === +id);

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
      {pageHooksData.map(({ name, id }) => (
        <li key={id}>
          <a
            href={`#${name}-hook`}
            className={`${scrolledHook === name ? styles.active : ""}`}
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
