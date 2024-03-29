import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import { hooksData } from "../../Data/hooksData";
import useArray from "../../Hooks/useArray";
import useToggle from "../../Hooks/useToggle";
import styles from "./SearchHooksInput.module.scss";
import SuggestionsMenu from "./SuggestionsMenu";
import { resetZoom } from "../../Functions/helper";

const SearchHooksInput = () => {
  const searchInpRef = useRef();
  const searchInpEle = searchInpRef.current;
  const navigateTo = useNavigate();
  const { setIsSideBarActive, setIsOverlayActive, hooksPerPage } =
    useGlobalContext();
  const [isSuggestionMenuActive, toggleSuggestionsActive] = useToggle(false);
  const {
    array: searchItems,
    set: setSearchItems,
    clear: clearSearchItems,
  } = useArray([]);

  function filterSearchData() {
    const searchValue = searchInpEle.value.toLowerCase();
    const filteredData = hooksData.filter((hookData) =>
      hookData.name.toLowerCase().startsWith(searchValue)
    );
    return filteredData;
  }

  function handleSearch(e) {
    e.preventDefault();

    const filteredResults = filterSearchData();
    const isNotFound = filteredResults.length === 0;
    const isFoundOneItem = filteredResults.length === 1;
    const isFoundMoreThanOneItem = filteredResults.length > 1;
    const isEmptyInput = searchInpEle.value === "";

    if (isEmptyInput) {
      toggleSuggestionsActive(false);
      clearSearchItems();
      resetZoom();
      return;
    }

    if (isFoundOneItem) {
      navigateToItem(filteredResults[0]);
      resetZoom();
    }

    if (isFoundMoreThanOneItem) {
      toggleSuggestionsActive(true);
      setSearchItems(filteredResults);
      resetZoom();
      return;
    }

    if (isNotFound) {
      clearSearchItems();
      resetZoom();
      return;
    }

    setIsOverlayActive(false);
    setIsSideBarActive(false);
  }

  function navigateToItem(itemData) {
    const indexOfItem = hooksData.indexOf(itemData);
    const itemPage = Math.ceil((indexOfItem + 1) / hooksPerPage);
    navigateTo(`/?page=${itemPage}`);

    setTimeout(() => {
      const sidebarLinksHooks = document.querySelectorAll("aside>div>ul>li>a");

      sidebarLinksHooks.forEach((hookLink) => {
        if (hookLink.textContent === itemData.name) hookLink.click();
      });
    }, 200);

    searchInpEle.value = "";
  }

  return (
    <form
      className={styles.SearchForm}
      onSubmit={(e) => handleSearch(e)}
      role="search"
    >
      <input
        id="search"
        type="search"
        placeholder="Search"
        autoComplete="off"
        ref={searchInpRef}
      />

      <button type="submit">Go</button>

      <SuggestionsMenu
        suggestionsData={{
          navigateToItem,
          searchItems,
          clearSearchItems,
          isSuggestionMenuActive,
          toggleSuggestionsActive,
        }}
      />
    </form>
  );
};
export default SearchHooksInput;
