import { memo, useEffect, useRef } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { hooksData } from "../../../Data/hooksData";
import { saveInRAR } from "../../../Functions/helper";
import useGetResizeWindow from "../../../Hooks/useGetResizeWindow";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const {
    scrolledHook,
    setScrolledHook,
    isSideBarActive,
    setIsSideBarActive,
    setIsOverlayActive,
  } = useGlobalContext();
  const windowSizes = useGetResizeWindow();
  const { width: windowWidth } = windowSizes;
  const screenSize = 1200;
  const isSmallThanScreen = windowWidth < screenSize;
  const dragLineRef = useRef();
  const sidebarRef = useRef();

  function handleDownloadAllHooks() {
    const files = [];

    hooksData.forEach((hookData) =>
      files.push({
        name: `${hookData.name}.jsx`,
        content: hookData.code,
      })
    );

    saveInRAR(files);
  }

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

          <ul>
            {hooksData.map(({ name, id }) => (
              <li key={id} onClick={() => setIsOverlayActive(false)}>
                <a
                  href={`#${name}-hook`}
                  className={scrolledHook === name ? styles.active : ""}
                  onClick={() => {
                    setScrolledHook(name);
                    setIsSideBarActive(false);
                  }}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.dragLine} ref={dragLineRef}></div>
        </div>

        {!isSmallThanScreen && (
          <button type="button" className={styles.closeSideBarButton}>
            <i className="fa-solid fa-angles-left"></i>
          </button>
        )}
      </aside>
    </>
  );
};
export default memo(SideBar);
