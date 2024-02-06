import { useNavigate } from "react-router-dom";
import styles from "./Error404.module.scss";

const Error404 = () => {
  const navigateTo = useNavigate();

  return (
    <div className={styles.errorContainer}>
      <div className={styles.error404}>
        <span className={styles.numberFour}>4</span>

        <div className={styles.cuteGuyContainer}>
          <div className={styles.head}>
            <div className={styles.eyes}></div>
            <div className={styles.chucks}></div>
            <div className={styles.mouth}></div>
          </div>
          <div className={styles.numberZero}>
            <div className={styles.cuteGuy}></div>
          </div>
        </div>

        <span className={styles.numberFour}>4</span>
      </div>

      <p>Oops. The page you're looking for doesn't exist.</p>
      <button
        type="button"
        className={styles.homeButton}
        onClick={() => navigateTo("/")}
      >
        Back Home
      </button>
    </div>
  );
};
export default Error404;
