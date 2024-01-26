import { useEffect, useRef } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { hooksData } from "../../../Data/hooksData";
import { saveInRAR } from "../../../Functions/helper";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import useGetResizeWindow from "../../../Hooks/useGetResizeWindow";
import ActiveHooksMenu from "./ActiveHooksMenu";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const { isSideBarActive, setIsSideBarActive, setIsOverlayActive } =
    useGlobalContext();
  const windowSizes = useGetResizeWindow();
  const { width: windowWidth } = windowSizes;
  const screenSize = 1200;
  const isSmallThanScreen = windowWidth < screenSize;
  const sidebarRef = useRef();
  const { isSideBarExtended, toggleIsSideBarExtended, isFocusModeActive } =
    useGlobalContext();

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

  useEffect(() => {
    if (windowWidth > screenSize) {
      setIsSideBarActive(false);
      setIsOverlayActive(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    document.body.classList[isSideBarExtended ? "add" : "remove"](
      "sidebarExtend"
    );
  }, [isSideBarExtended]);

  useFunctionOnKey(toggleSideBar, "KeyM");
  useFunctionOnKey(toggleIsSideBarExtended, "KeyE");

  return (
    <>
      {isSmallThanScreen && !isFocusModeActive && (
        <i
          onClick={handleOpenSideBarButton}
          className={`fa-solid fa-bars ${styles.sidebarIcon}`}
        ></i>
      )}

      <aside
        className={`${styles.sidebarWrapper} ${
          isSmallThanScreen ? styles.hide : ""
        } ${isSideBarActive ? styles.active : ""}
        ${isSideBarExtended ? styles.extend : ""}
        ${isFocusModeActive ? styles.focusMode : ""}
    `}
      >
        <div className={`${styles.sidebar}`} ref={sidebarRef}>
          {isSmallThanScreen && (
            <button
              type="button"
              className={`${styles.closeNavButton} ${
                isSideBarActive ? styles.active : ""
              }`}
              title="Close sidebar"
            >
              <i
                onClick={handleCloseSideBarButton}
                className="fa-solid fa-xmark"
              ></i>
            </button>
          )}

          <button
            type="button"
            className={styles.downloadAllButton}
            onClick={() => saveInRAR(hooksData)}
          >
            <span>Download Hooks</span>
            <i className="fa-solid fa-arrow-down"></i>
          </button>

          <ActiveHooksMenu />
        </div>

        {!isSmallThanScreen && (
          <button
            type="button"
            className={`${styles.closeSideBarButton} ${
              isSideBarExtended ? styles.active : ""
            }`}
            onClick={toggleIsSideBarExtended}
          >
            {isSideBarExtended ? (
              <i className="fa-solid fa-angles-right"></i>
            ) : (
              <i className="fa-solid fa-angles-left"></i>
            )}
          </button>
        )}

        {isSideBarExtended && (
          <div
            className={styles.dragLine}
            onClick={toggleIsSideBarExtended}
          ></div>
        )}
      </aside>
    </>
  );
};
export default SideBar;
