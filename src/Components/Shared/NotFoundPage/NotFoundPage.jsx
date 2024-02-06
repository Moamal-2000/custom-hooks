import { useEffect } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import styles from "./NotFoundPage.module.scss";
import Error404 from "./Error404";

const NotFoundPage = () => {
  const { setIsNotFoundPageShown } = useGlobalContext();

  useEffect(() => {
    setIsNotFoundPageShown(true);
  }, []);

  return (
    <div className="container">
      <main className={styles.notFoundPage}>
        <Error404 />
      </main>
    </div>
  );
};
export default NotFoundPage;
