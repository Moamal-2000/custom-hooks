import { Outlet } from "react-router-dom";
import SkipContentLink from "../Shared/MiniComponents/SkipContentLink";
import styles from "./Home.module.scss";
import Introduction from "./Introduction/Introduction";

const Home = () => {
  return (
    <div className={styles.home}>
      <SkipContentLink scrollTo="main-content" />

      <div className="container">
        <main className={styles.content} id="main-content">
          <Introduction />

          <section className={styles.hooks}>
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  );
};
export default Home;
