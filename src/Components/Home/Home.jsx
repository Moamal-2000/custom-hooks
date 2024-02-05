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
    <div className="container">
      <main className={styles.content} id="main-content">
        <Introduction />

        <article className={styles.hooks}>
          <Outlet />
        </article>
      </main>
    </div>
  );
};
export default Home;
