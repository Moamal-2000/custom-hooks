import { useSearchParams } from "react-router-dom";
import { useGlobalContext } from "src/Context/GlobalContext";
import { useHooksContext } from "src/Context/HooksContext";
import { hooksData } from "src/Data/hooksData";
import { NUMBER_OF_PAGES } from "src/Data/variables";
import { getPageData } from "src/Functions/projectFunctions";
import s from "./HooksButtons.module.scss";

const HooksButtons = () => {
  const { scrolledHook, setScrolledHook } = useHooksContext();
  const { setIsOverlayActive, setIsSideBarActive } = useGlobalContext();
  const [params] = useSearchParams();
  const pageId = parseInt(params.get("page")) || 1;
  const { pageData } = getPageData(hooksData, pageId, NUMBER_OF_PAGES);

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
