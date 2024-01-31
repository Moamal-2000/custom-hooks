import { useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { scrollToBottom } from "../../../Functions/helper";

const HooksNavigator = () => {
  const { numbersOfPages } = useGlobalContext();
  const location = useLocation();
  const currentPage = location.pathname.slice(1, 2);
  const navigateTo = useNavigate();
  const lengthPages = numbersOfPages?.length;
  const isLastPage = lengthPages !== +currentPage;
  const isFirstPage = +currentPage > 1;

  function handleNextPage() {
    if (isLastPage) navigateTo(`${+currentPage + 1}`);
    scrollToBottom();
  }

  function handlePreviousPage() {
    if (isFirstPage) navigateTo(`${+currentPage - 1}`);
    scrollToBottom();
  }

  return (
    <div className="wrapper">
      {isFirstPage && (
        <button type="button" onClick={handlePreviousPage}>
          Previous
        </button>
      )}

      {isLastPage && (
        <button type="button" onClick={handleNextPage}>
          Next
        </button>
      )}
    </div>
  );
};
export default HooksNavigator;
