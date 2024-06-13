import { useSearchParams } from "react-router-dom";
import { hooksData } from "src/Data/hooksData";
import { getPageData } from "src/Functions/projectFunctions";
import { useGlobalContext } from "../../../Context/GlobalContext";
import s from "./HooksButtons.module.scss";

const HooksButtons = () => {
  const {
    scrolledHook,
    setIsOverlayActive,
    setScrolledHook,
    setIsSideBarActive,
    hooksPerPage,
  } = useGlobalContext();
  const [params] = useSearchParams();
  const pageId = parseInt(params.get("page")) || 1;
  const { pageData } = getPageData(hooksData, pageId, hooksPerPage);

  function handleClickLink(hookName) {
    setScrolledHook(hookName);
    setIsSideBarActive(false);
    setIsOverlayActive(false);
  }

  return pageData.map(({ name, id }) => {
    const activeClass = scrolledHook === name ? s.active : "";

    return (
      <li className={s.hookButton} key={id}>
        <a
          href={`#${name}-hook`}
          className={activeClass}
          onClick={() => handleClickLink(name)}
        >
          {name}
        </a>
      </li>
    );
  });
};
export default HooksButtons;
