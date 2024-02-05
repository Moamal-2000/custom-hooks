import { useEffect } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const { setIsNotFoundPageShown } = useGlobalContext();

  useEffect(() => {
    setIsNotFoundPageShown(true);
  }, []);

  return (
    <div className="container">
      <main className={styles.notFoundPage}>NotFoundPage</main>
    </div>
  );
};
export default NotFoundPage;
