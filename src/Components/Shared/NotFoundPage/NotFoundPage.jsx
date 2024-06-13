import { useEffect } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import Error404 from "./Error404";
import s from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const { setIsNotFoundPageShown } = useGlobalContext();

  useEffect(() => {
    setIsNotFoundPageShown(true);
  }, []);

  return (
    <div className="container">
      <main className={s.notFoundPage}>
        <Error404 />
      </main>
    </div>
  );
};
export default NotFoundPage;
