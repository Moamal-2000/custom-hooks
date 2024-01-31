import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { scrollToBottom } from "../../../Functions/helper";
import styles from "./HooksNavigator.module.scss";

const HooksNavigator = () => {
  const { numbersOfPages } = useGlobalContext();
  const location = useLocation();
  let currentPage = location.pathname.slice(1, 2);
  const navigateTo = useNavigate();
  const lengthPages = numbersOfPages?.length;
  const isLastPage = lengthPages !== +currentPage;
  const isFirstPage = +currentPage > 1;

  function handleNextPage() {
    if (!currentPage) currentPage = 1;
    if (isLastPage) navigateTo(`${+currentPage + 1}`);
    scrollToBottom();
  }

  function handlePreviousPage() {
    if (isFirstPage) navigateTo(`${+currentPage - 1}`);
    scrollToBottom();
  }

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.prevButton}
        onClick={handlePreviousPage}
        disabled={!isFirstPage}
      >
        Previous page
      </button>

      <button
        type="button"
        className={styles.nextButton}
        onClick={handleNextPage}
        disabled={!isLastPage}
      >
        Next page
      </button>
    </div>
  );
};
export default HooksNavigator;
