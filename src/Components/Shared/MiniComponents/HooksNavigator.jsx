import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { NUMBER_OF_PAGES } from "src/Data/variables";
import { scrollToBottom } from "src/Functions/helper";
import s from "./HooksNavigator.module.scss";

const HooksNavigator = () => {
  const [params, setParams] = useSearchParams();
  const navigateTo = useNavigate();
  const currentPage = parseInt(params.get("page")) || 1;
  const isLastPage = currentPage === NUMBER_OF_PAGES;
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
    <div className={s.wrapper}>
      <button
        type="button"
        className={s.prevButton}
        onClick={handlePreviousPage}
        disabled={isFirstPage}
      >
        Previous page
      </button>

      <button
        type="button"
        className={s.nextButton}
        onClick={handleNextPage}
        disabled={isLastPage}
      >
        Next page
      </button>
    </div>
  );
};

export default HooksNavigator;
