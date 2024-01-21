import { memo, useEffect } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { hooksData } from "../../../Data/hooksData";
import { saveInRAR } from "../../../Functions/helper";
import useGetResizeWindow from "../../../Hooks/useGetResizeWindow";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const { scrolledHook, setScrolledHook, isSideBarActive, setIsSideBarActive } =
    useGlobalContext();
  const windowSizes = useGetResizeWindow();
  const { width } = windowSizes;
  const screenSize = 1280;
  const isSmallThanScreen = width < screenSize;

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

  useEffect(() => {
    if (width > screenSize) setIsSideBarActive(false);
  }, [width]);

  return (
    <>
      {isSmallThanScreen && (
        <i
          onClick={() => {
            setIsSideBarActive((prevState) => !prevState);
          }}
          className={`fa-solid fa-bars ${styles.sidebarIcon}`}
        ></i>
      )}

      <div
        className={`${styles.sidebar} ${isSmallThanScreen ? styles.hide : ""} ${
          isSideBarActive ? styles.active : ""
        }`}
      >
        {isSmallThanScreen && (
          <i
            onClick={() => setIsSideBarActive(false)}
            className="fa-solid fa-xmark"
          ></i>
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
            <li key={id}>
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
      </div>
    </>
  );
};
export default memo(SideBar);
