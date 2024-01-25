import { memo, useEffect, useRef } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { handleDownloadAllHooks } from "../../../Functions/projectFunctions";
import useGetResizeWindow from "../../../Hooks/useGetResizeWindow";
import useToggle from "../../../Hooks/useToggle";
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
  const [isSideBarExtended, toggleIsSideVarExtended] = useToggle();

  function handleOpenSideBarButton() {
    setIsSideBarActive(true);
    setIsOverlayActive(true);
  }

  function handleCloseSideBarButton() {
    setIsSideBarActive(false);
    setIsOverlayActive(false);
  }

  useEffect(() => {
    if (windowWidth > screenSize) {
      setIsSideBarActive(false);
      setIsOverlayActive(false);
    }
  }, [windowWidth]);

  return (
    <>
      {isSmallThanScreen && (
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
            className={`${styles.downloadAllButton} linkStyle1`}
            onClick={handleDownloadAllHooks}
          >
            Download all hooks
          </button>

          <ActiveHooksMenu />
        </div>

        {!isSmallThanScreen && (
          <button
            type="button"
            className={`${styles.closeSideBarButton} ${
              isSideBarExtended ? styles.active : ""
            }`}
            onClick={toggleIsSideVarExtended}
          >
            {isSideBarExtended ? (
              <i className="fa-solid fa-angles-left"></i>
            ) : (
              <i className="fa-solid fa-angles-right"></i>
            )}
          </button>
        )}

        {isSideBarExtended && (
          <div
            className={styles.dragLine}
            onClick={toggleIsSideVarExtended}
          ></div>
        )}
      </aside>
    </>
  );
};
export default memo(SideBar);
