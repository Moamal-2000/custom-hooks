import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "src/Context/GlobalContext";
import { hooksData } from "src/Data/hooksData";
import { NUMBER_OF_PAGES } from "src/Data/variables";
import useArray from "src/Hooks/useArray";
import useToggle from "src/Hooks/useToggle";
import s from "./SearchHooksInput.module.scss";
import SuggestionsMenu from "./SuggestionsMenu";

const SearchHooksInput = () => {
  const searchInpRef = useRef();
  const searchInpEle = searchInpRef.current;
  const navigateTo = useNavigate();
  const { setIsSideBarActive, setIsOverlayActive } = useGlobalContext();
  const [isSuggestionMenuActive, toggleSuggestionsActive] = useToggle(false);
  const {
    array: searchItems,
    set: setSearchItems,
    clear: clearSearchItems,
  } = useArray([]);

  function filterSearchData() {
    const searchValue = searchInpEle.value.toLowerCase();
    const filteredData = hooksData.filter((hookData) =>
      hookData.name.toLowerCase().includes(searchValue)
    );
    return filteredData;
  }

  function handleSearch(e) {
    e.preventDefault();

    const filterResults = filterSearchData();
    const isFoundItem = filterResults.length >= 1;

    if (isFoundItem) {
      toggleSuggestionsActive(true);
      setSearchItems(filterResults);
      return;
    }

    if (!isFoundItem) {
      clearSearchItems();
      return;
    }

    setIsOverlayActive(false);
    setIsSideBarActive(false);
  }

  function navigateToItem(itemData) {
    const indexOfItem = hooksData.indexOf(itemData);
    const itemPage = Math.ceil((indexOfItem + 1) / NUMBER_OF_PAGES);
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
    <form className={s.SearchForm} onSubmit={handleSearch} role="search">
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
