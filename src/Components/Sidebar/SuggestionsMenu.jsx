import { useEffect, useRef } from "react";
import styles from "./SuggestionsMenu.module.scss";

const SuggestionsMenu = ({ suggestionsData }) => {
  const {
    navigateToItem,
    searchItems,
    clearSearchItems,
    isSuggestionMenuActive,
    setSuggestionsActive,
  } = suggestionsData;
  const suggestionMenuRef = useRef();

  function handleSuggestionItem(item) {
    navigateToItem(item);
    clearSearchItems();
    setSuggestionsActive(false);
  }

  useEffect(() => {
    function handleSuggestionMenuAppearance(e) {
      const isSearchInp = e.target?.id === "search";
      const isSearchButton = e.target.textContent === "Go";
      const shouldActiveSuggestionMenu =
        isSearchInp && !isSuggestionMenuActive && searchItems.length > 0;

      if (isSearchInp || isSearchButton) {
        if (shouldActiveSuggestionMenu) setSuggestionsActive(true);
        return;
      }

      setSuggestionsActive(false);
    }

    document.addEventListener("click", (e) =>
      handleSuggestionMenuAppearance(e)
    );

    return () =>
      document.removeEventListener("click", (e) =>
        handleSuggestionMenuAppearance(e)
      );
  }, [isSuggestionMenuActive]);

  return (
    <ul
      ref={suggestionMenuRef}
      className={`${styles.suggestionMenu} ${
        isSuggestionMenuActive ? styles.active : ""
      }`}
    >
      {searchItems?.map((item) => (
        <SearchItem item={item} onClick={() => handleSuggestionItem(item)} />
      ))}
    </ul>
  );
};

export default SuggestionsMenu;

const SearchItem = ({ item, onClick }) => (
  <li key={`search-${item.id}`} className={styles.searchItem} onClick={onClick}>
    <span>{item.name}</span>
    <i className="fa-solid fa-magnifying-glass"></i>
  </li>
);