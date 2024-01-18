import { hooksData } from "../../Data/hooksData";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        {hooksData.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
