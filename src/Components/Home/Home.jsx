import { Outlet } from "react-router-dom";
import styles from "./Home.module.scss";
import Introduction from "./Introduction/Introduction";
import SideBar from "./Sidebar/SideBar";

const Home = () => {
  return (
    <div className={styles.home}>
      <SideBar />

      <div className="container">
        <main className={styles.content}>
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
