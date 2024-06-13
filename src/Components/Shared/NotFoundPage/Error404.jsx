import { useNavigate } from "react-router-dom";
import s from "./Error404.module.scss";

const Error404 = () => {
  const navigateTo = useNavigate();

  return (
    <div className={s.errorContainer}>
      <div className={s.error404}>
        <span className={s.numberFour}>4</span>

        <div className={s.cuteGuyContainer}>
          <div className={s.head}>
            <div className={s.eyes}></div>
            <div className={s.chucks}></div>
            <div className={s.mouth}></div>
          </div>
          <div className={s.numberZero}>
            <div className={s.cuteGuy}></div>
          </div>
        </div>

        <span className={s.numberFour}>4</span>
      </div>

      <p>Oops. The page you're looking for doesn't exist.</p>
      <button
        type="button"
        className={s.homeButton}
        onClick={() => navigateTo("/")}
      >
        Back Home
      </button>
    </div>
  );
};
export default Error404;
