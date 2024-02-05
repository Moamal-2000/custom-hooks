import { useEffect } from "react";
import styles from "./SuggestionsMenu.module.scss";

const SuggestionsMenu = ({ suggestionsData }) => {
  const {
    navigateToItem,
    searchItems,
    clearSearchItems,
    isSuggestionMenuActive,
    setSuggestionsActive,
  } = suggestionsData;
  const activeClass = isSuggestionMenuActive ? styles.active : "";

  function handleSuggestionItem(item) {
    navigateToItem(item);
    clearSearchItems();
    setSuggestionsActive(false);
  }

  useEffect(() => {
    function handleSuggestionsMenuAppearance(e) {
      const isSearchInp = e.target?.id === "search";
      const isSearchButton = e.target.textContent === "Go";
      const shouldActiveSuggestionsMenu =
        isSearchInp && !isSuggestionMenuActive && searchItems.length > 0;

      if (isSearchInp || isSearchButton) {
        if (shouldActiveSuggestionsMenu) setSuggestionsActive(true);
        return;
      }

      setSuggestionsActive(false);
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
    <i className="fa-solid fa-magnifying-glass"></i>
  </li>
);
