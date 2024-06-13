import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "src/Context/GlobalContext";
import s from "./Home.module.scss";
import Introduction from "./Introduction/Introduction";

const Home = () => {
  const { setIsNotFoundPageShown } = useGlobalContext();

  useEffect(() => {
    setIsNotFoundPageShown(false);
  }, []);

  return (
    <div className="container">
      <main className={s.content} id="main-content">
        <Introduction />

        <article className={s.hooks}>
          <Outlet />
        </article>
      </main>
    </div>
  );
};
export default Home;
