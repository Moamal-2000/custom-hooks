import { useEffect } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
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
  const { pressedKey, setPressedKey } = useGlobalContext();
  const activeClass = isSuggestionMenuActive ? styles.active : "";
  const isTabPressed = pressedKey === "Tab";
  const isSearchInpFocused = document.activeElement?.id === "search";
  const isSearchButtonFocused = document.activeElement?.textContent === "Go";

  function handleSuggestionItem(item) {
    navigateToItem(item);
    clearSearchItems();
    toggleSuggestionsActive(false);
  }

  useEffect(() => {
    function handleSuggestionsMenuAppearance(e) {
      const isSearchInpFocused = e.target?.id === "search";
      const isSearchButtonFocused = e.target?.textContent === "Go";
      const shouldActiveSuggestionsMenu =
        isSearchInpFocused && !isSuggestionMenuActive && searchItems.length > 0;

      if (isSearchInpFocused || isSearchButtonFocused) {
        if (shouldActiveSuggestionsMenu) toggleSuggestionsActive(true);
        return;
      }

      toggleSuggestionsActive(false);
    }

    document.addEventListener("click", handleSuggestionsMenuAppearance);

    return () => {
      document.removeEventListener("click", handleSuggestionsMenuAppearance);
    };
  }, [isSuggestionMenuActive]);

  useEffect(() => {
    const shouldHideSuggestionsMenu =
      isTabPressed && (isSearchInpFocused || isSearchButtonFocused);

    if (shouldHideSuggestionsMenu) {
      toggleSuggestionsActive(false);
      setPressedKey("");
    }
  }, [pressedKey]);

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
