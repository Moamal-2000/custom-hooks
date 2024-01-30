import { useEffect, useRef } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import useGetResizeWindow from "../../../Hooks/useGetResizeWindow";
import ActiveHooksMenu from "./ActiveHooksMenu";
import DownloadHooksButton from "./DownloadHooksButton";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const {
    isSideBarActive,
    setIsSideBarActive,
    setIsOverlayActive,
    isSideBarExtendedLocal,
    setIsSideBarExtended,
    isFocusModeActiveLocal,
  } = useGlobalContext();
  const sidebarRef = useRef();
  const requiredScreenWidth = 1200;
  const { width: windowWidth } = useGetResizeWindow();
  const isSmallThanScreen = windowWidth < requiredScreenWidth;
  const hideClass = isSmallThanScreen ? styles.hide : "";
  const activeClass = isSideBarActive ? styles.active : "";
  const extendClass = isSideBarExtendedLocal ? styles.extend : "";
  const focusModeClass = isFocusModeActiveLocal ? styles.focusMode : "";

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
    console.log('Toggle');
    setIsSideBarExtended(!isSideBarExtendedLocal);
  }

  useEffect(() => {
    if (windowWidth > requiredScreenWidth) {
      setIsSideBarActive(false);
      setIsOverlayActive(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    document.body.classList[isSideBarExtendedLocal ? "add" : "remove"](
      "sidebarExtend"
    );
  }, [isSideBarExtendedLocal]);

  useFunctionOnKey(toggleSideBar, "KeyM");
  useFunctionOnKey(toggleExtendSideBar, "KeyE");

  const extendSideBarButton = (
    <button
      type="button"
      className={`${styles.closeSideBarButton} ${
        isSideBarExtendedLocal ? styles.active : ""
      }`}
      onClick={toggleExtendSideBar}
    >
      <i
        className={`fa-solid fa-angles-${
          isSideBarExtendedLocal ? "right" : "left"
        }`}
      ></i>
    </button>
  );

  const closeSideBarButton = (
    <button
      type="button"
      className={`${styles.closeNavButton} ${activeClass}`}
      title="Close sidebar"
    >
      <i onClick={handleCloseSideBarButton} className="fa-solid fa-xmark"></i>
    </button>
  );

  return (
    <>
      {isSmallThanScreen && !isFocusModeActiveLocal && (
        <i
          onClick={handleOpenSideBarButton}
          className={`fa-solid fa-bars ${styles.sidebarIcon}`}
        ></i>
      )}

      <aside
        className={`${styles.sidebarWrapper} ${hideClass} ${activeClass} ${extendClass} ${focusModeClass}`}
      >
        <div className={`${styles.sidebar}`} ref={sidebarRef}>
          {isSmallThanScreen && closeSideBarButton}
          <DownloadHooksButton />
          <ActiveHooksMenu />
        </div>

        {!isSmallThanScreen && extendSideBarButton}

        {isSideBarExtendedLocal && (
          <div className={styles.dragLine} onClick={toggleExtendSideBar}></div>
        )}
      </aside>
    </>
  );
};

export default SideBar;
