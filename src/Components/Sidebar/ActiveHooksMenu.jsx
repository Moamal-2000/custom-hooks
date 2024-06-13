import { useSearchParams } from "react-router-dom";
import { useGlobalContext } from "src/Context/GlobalContext";
import { hooksData } from "src/Data/hooksData";
import { getPageData } from "src/Functions/projectFunctions";
import s from "./ActiveHooksMenu.module.scss";

const ActiveHooksMenu = () => {
  const {
    scrolledHook,
    setIsOverlayActive,
    setScrolledHook,
    setIsSideBarActive,
    hooksPerPage,
  } = useGlobalContext();
  const [params] = useSearchParams();
  const pageId = parseInt(params.get("page")) || 1;
  const { isNotFoundPageShown } = useGlobalContext();
  const { pageData: pageHooksData } = getPageData(
    hooksData,
    pageId,
    hooksPerPage
  );

  function handleClickLink(hookName) {
    setScrolledHook(hookName);
    setIsSideBarActive(false);
    setIsOverlayActive(false);
  }

  const hooksButtons = pageHooksData.map(({ name, id }) => (
    <li key={id}>
      <a
        href={`#${name}-hook`}
        className={`${scrolledHook === name ? s.active : ""}`}
        onClick={() => handleClickLink(name)}
      >
        {name}
      </a>
    </li>
  ));

  return (
    !isNotFoundPageShown && <ul className={s.hooksMenu}>{hooksButtons}</ul>
  );
};

export default ActiveHooksMenu;
