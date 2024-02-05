import { useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import { hooksData } from "../../Data/hooksData";
import styles from "./ActiveHooksMenu.module.scss";

const ActiveHooksMenu = () => {
  const [params] = useSearchParams();
  const pageId = parseInt(params.get("page")) || 1;
  const { isNotFoundPageShown } = useGlobalContext();

  const pageHooksData = hooksData.filter(
    (hookData) => hookData?.page === pageId
  );

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
    !isNotFoundPageShown && (
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
    )
  );
};

export default ActiveHooksMenu;
