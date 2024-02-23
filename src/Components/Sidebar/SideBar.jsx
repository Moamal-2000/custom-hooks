import { useEffect, useRef } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import useFunctionOnKey from "../../Hooks/useFunctionOnKey";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import ActiveHooksMenu from "./ActiveHooksMenu";
import DownloadHooksButton from "./DownloadHooksButton";
import SearchHooksInput from "./SearchHooksInput";
import styles from "./SideBar.module.scss";
import ToolTip from "../Shared/MiniComponents/ToolTip";
import RepoStarsForks from "./RepoStarsForks";

const SideBar = () => {
  const {
    isSideBarActive,
    setIsSideBarActive,
    setIsOverlayActive,
    isSideBarExtendedLocal,
    setIsSideBarExtended,
    isFocusModeActiveLocal,
    isShortcutMenuActive,
    windowWidth
  } = useGlobalContext();
  const sidebarRef = useRef();
  const requiredScreenWidth = 1200;
  const isSmallThanScreen = windowWidth < requiredScreenWidth;
  const hideClass = isSmallThanScreen ? styles.hide : "";
  const activeClass = isSideBarActive ? styles.active : "";
  const extendClass = isSideBarExtendedLocal ? styles.extend : "";
  const focusModeClass = isFocusModeActiveLocal ? styles.focusMode : "";
  const shortcutMenuClass = isShortcutMenuActive ? styles.shortcutMenu : "";
  const asideClasses = `${hideClass} ${activeClass} ${extendClass} ${focusModeClass} ${shortcutMenuClass}`;

  useFunctionOnKey(toggleSideBar, ["KeyM"], 300, true);
  useFunctionOnKey(toggleExtendSideBar, ["KeyE"], 300, true);

  // Functions
  function handleOpenSideBarButton() {
    setIsSideBarActive(true);
    setIsOverlayActive(true);
  }

  function handleCloseSideBarButton() {
    setIsSideBarActive(false);
    setIsOverlayActive(false);
  }

  function toggleSideBar() {
    if (isSmallThanScreen)
      isSideBarActive ? handleCloseSideBarButton() : handleOpenSideBarButton();
  }

  function toggleExtendSideBar() {
    setIsSideBarExtended(!isSideBarExtendedLocal);
  }

  // UseEffects
  useEffect(() => {
    if (windowWidth > requiredScreenWidth) {
      setIsSideBarActive(false);
      setIsOverlayActive(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    const method = isSideBarExtendedLocal ? "add" : "remove";
    document.body.classList[method]("sidebarExtend");
  }, [isSideBarExtendedLocal]);

  // Components
  const ExtendSideBarButton = () => {
    const activeClass = isSideBarExtendedLocal ? styles.active : "";
    const arrowDirection = isSideBarExtendedLocal ? "Right" : "Left";

    return (
      <button
        type="button"
        className={`${styles.extendSideBarButton} ${activeClass}`}
        onClick={toggleExtendSideBar}
        aria-label="Extend Sidebar"
        tabIndex="-1"
      >
        <i className={`fa-solid fa-angles-${arrowDirection}`}></i>
        <SvgIcon name={`double${arrowDirection}Arrow`} />
        <ToolTip
          content="Extend Sidebar"
          left="40px"
          top="-1px"
          arrowDir="left"
        />
      </button>
    );
  };

  const closeSideBarButton = (
    <button
      type="button"
      className={`${styles.closeNavButton} ${activeClass}`}
      onClick={handleCloseSideBarButton}
      title="Close Sidebar"
    >
      <SvgIcon name="xMark" />
    </button>
  );

  const sidebarButton = (
    <button
      type="button"
      className={styles.sidebarButton}
      onClick={handleOpenSideBarButton}
      title="Sidebar Menu"
    >
      <SvgIcon name="burgerMenu" />
    </button>
  );

  return (
    <>
      {isSmallThanScreen && !isFocusModeActiveLocal && sidebarButton}

      <aside className={`${styles.sidebarWrapper} ${asideClasses}`}>
        <div className={`${styles.sidebar}`} ref={sidebarRef}>
          {isSmallThanScreen && closeSideBarButton}
          <SearchHooksInput />
          <DownloadHooksButton />
          <ActiveHooksMenu />
          {/* <RepoStarsForks /> */}
        </div>

        {!isSmallThanScreen && <ExtendSideBarButton />}

        {isSideBarExtendedLocal && (
          <div className={styles.dragLine} onClick={toggleExtendSideBar}></div>
        )}
      </aside>
    </>
  );
};

export default SideBar;
