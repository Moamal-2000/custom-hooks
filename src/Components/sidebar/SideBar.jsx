import { useGlobalContext } from "../../Context/GlobalContext";
import { hooksData } from "../../Data/hooksData";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const { scrolledHook, setScrolledHook } = useGlobalContext();

  return (
    <div className={styles.sidebar}>
      <ul>
        {hooksData.map(({ name, id }) => (
          <li key={id}>
            <a
              href={`#${name}-hook`}
              className={scrolledHook === name ? styles.active : ""}
              onClick={() => setScrolledHook(name)}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
