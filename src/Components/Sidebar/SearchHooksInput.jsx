import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import { hooksData } from "../../Data/hooksData";
import useArray from "../../Hooks/useArray";
import useToggle from "../../Hooks/useToggle";
import styles from "./SearchHooksInput.module.scss";
import SuggestionsMenu from "./SuggestionsMenu";

const SearchHooksInput = () => {
  const searchInpRef = useRef();
  const navigateTo = useNavigate();
  const { setIsSideBarActive, setIsOverlayActive } = useGlobalContext();
  const [isSuggestionMenuActive, _, setSuggestionsActive] = useToggle();
  const {
    array: searchItems,
    set: setSearchItems,
    clear: clearSearchItems,
  } = useArray([]);

  function filterSearchData() {
    const searchValue = searchInpRef.current?.value?.toLowerCase();
    const filteredData = hooksData.filter((hookData) =>
      hookData.name.toLowerCase().startsWith(searchValue)
    );

    return filteredData;
  }

  function handleSearch(e) {
    e.preventDefault();

    const filteredResults = filterSearchData();
    const isNotFound = filteredResults === 0;
    const isFound = filteredResults.length === 1;

    if (isNotFound) return;
    if (isFound) navigateToItem(filteredResults[0]);
    if (filteredResults.length > 1) {
      setSuggestionsActive(true);
      setSearchItems(filteredResults);
      return
    }

    setIsOverlayActive(false);
    setIsSideBarActive(false);
  }

  function navigateToItem(itemData) {
    navigateTo(`/?page=${itemData.page}`);

    setTimeout(() => {
      const sidebarLinksHooks = document.querySelectorAll("aside>div>ul>li>a");

      sidebarLinksHooks.forEach((hookLink) => {
        if (hookLink.textContent === itemData.name) hookLink.click();
      });
    }, 200);

    searchInpRef.current.value = "";
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
          setSuggestionsActive,
        }}
      />
    </form>
  );
};
export default SearchHooksInput;
