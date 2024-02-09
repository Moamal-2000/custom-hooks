import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { scrollToBottom } from "../../../Functions/helper";
import styles from "./HooksNavigator.module.scss";

const HooksNavigator = () => {
  const { numbersOfPages } = useGlobalContext();
  const [params, setParams] = useSearchParams();
  const navigateTo = useNavigate();
  const currentPage = parseInt(params.get("page")) || 1;
  const isLastPage = currentPage === numbersOfPages;
  const isFirstPage = currentPage === 1;

  function handleNextPage() {
    if (isLastPage) return;

    const nextPage = currentPage + 1;
    setParams({ page: nextPage });
    navigateTo(`/?page=${nextPage}`);
    scrollToBottom();
  }

  function handlePreviousPage() {
    if (isFirstPage) return;

    const previousPage = currentPage - 1;
    setParams({ page: previousPage });
    navigateTo(`/?page=${previousPage}`);
    scrollToBottom();
  }

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.prevButton}
        onClick={handlePreviousPage}
        disabled={isFirstPage}
      >
        Previous page
      </button>

      <button
        type="button"
        className={styles.nextButton}
        onClick={handleNextPage}
        disabled={isLastPage}
      >
        Next page
      </button>
    </div>
  );
};

export default HooksNavigator;
