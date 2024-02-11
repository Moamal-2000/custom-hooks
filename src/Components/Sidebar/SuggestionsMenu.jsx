import { useEffect } from "react";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import styles from "./SuggestionsMenu.module.scss";

const SuggestionsMenu = ({ suggestionsData }) => {
  const {
    navigateToItem,
    searchItems,
    clearSearchItems,
    isSuggestionMenuActive,
    toggleSuggestionsActive,
  } = suggestionsData;
  const activeClass = isSuggestionMenuActive ? styles.active : "";

  function handleSuggestionItem(item) {
    navigateToItem(item);
    clearSearchItems();
    toggleSuggestionsActive(false);
  }

  useEffect(() => {
    function handleSuggestionsMenuAppearance(e) {
      const isSearchInp = e.target?.id === "search";
      const isSearchButton = e.target.textContent === "Go";
      const shouldActiveSuggestionsMenu =
        isSearchInp && !isSuggestionMenuActive && searchItems.length > 0;

      if (isSearchInp || isSearchButton) {
        if (shouldActiveSuggestionsMenu) toggleSuggestionsActive(true);
        return;
      }

      toggleSuggestionsActive(false);
    }

    document.addEventListener("click", (e) =>
      handleSuggestionsMenuAppearance(e)
    );

    return () =>
      document.removeEventListener("click", (e) =>
        handleSuggestionsMenuAppearance(e)
      );
  }, [isSuggestionMenuActive]);

  return (
    <ul className={`${styles.suggestionMenu} ${activeClass}`}>
      {searchItems.length > 0 &&
        searchItems?.map((item) => (
          <SearchItem
            item={item}
            key={`search-${item.id}`}
            onClick={() => handleSuggestionItem(item)}
          />
        ))}
    </ul>
  );
};

export default SuggestionsMenu;

const SearchItem = ({ item, onClick }) => (
  <li className={styles.searchItem} onClick={onClick}>
    <span>{item.name}</span>
    <SvgIcon name="search" />
  </li>
);
