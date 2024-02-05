import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import styles from "./Home.module.scss";
import Introduction from "./Introduction/Introduction";

const Home = () => {
  const { setIsNotFoundPageShown } = useGlobalContext();

  useEffect(() => {
    setIsNotFoundPageShown(false);
  }, []);

  return (
    <div className={styles.home}>
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
