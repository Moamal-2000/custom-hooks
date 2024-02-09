import { useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import { hooksData } from "../../Data/hooksData";
import { getPageData } from "../../Functions/projectFunctions";
import styles from "./ActiveHooksMenu.module.scss";

const ActiveHooksMenu = () => {
  const {
    scrolledHook,
    setIsOverlayActive,
    setScrolledHook,
    setIsSideBarActive,
  } = useGlobalContext();
  const [params] = useSearchParams();
  const pageId = parseInt(params.get("page")) || 1;
  const { isNotFoundPageShown } = useGlobalContext();
  const { pageData: pageHooksData } = getPageData(hooksData, pageId, 5);

  function handleClickLink(hookName) {
    setScrolledHook(hookName);
    setIsSideBarActive(false);
    setIsOverlayActive(false);
  }

  const hooksButtons = pageHooksData.map(({ name, id }) => (
    <li key={id}>
      <a
        href={`#${name}-hook`}
        className={`${scrolledHook === name ? styles.active : ""}`}
        onClick={() => handleClickLink(name)}
      >
        {name}
      </a>
    </li>
  ));

  return (
    !isNotFoundPageShown && <ul className={styles.hooksMenu}>{hooksButtons}</ul>
  );
};

export default ActiveHooksMenu;
