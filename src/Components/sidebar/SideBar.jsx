import { useGlobalContext } from "../../Context/GlobalContext";
import { hooksData } from "../../Data/hooksData";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const {scrolledHook, setScrolledHok} = useGlobalContext()

  // console.log(scrolledHook);

  return (
    <div className={styles.sidebar}>
      <ul>
        {hooksData.map(({ name, id }) => (
          <li className={scrolledHook === name ? styles.active : ""} key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
