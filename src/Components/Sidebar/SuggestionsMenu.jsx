import { useEffect } from "react";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./SuggestionsMenu.module.scss";

const SuggestionsMenu = ({ suggestionsData }) => {
  const {
    navigateToItem,
    searchItems,
    clearSearchItems,
    isSuggestionMenuActive,
    toggleSuggestionsActive,
  } = suggestionsData;
  const activeClass = isSuggestionMenuActive ? s.active : "";

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

  return (
    <div className={`${s.suggestionMenu} ${activeClass}`}>
      {searchItems.length > 0 &&
        searchItems?.map((item) => {
          const isLastItem = searchItems.at(-1).id === item.id;

          function closeSuggestionMenu() {
            toggleSuggestionsActive(false);
          }

          return (
            <button
              className={s.searchItem}
              key={`search-${item.id}`}
              type="button"
              onClick={() => handleSuggestionItem(item)}
              onBlur={isLastItem ? closeSuggestionMenu : () => {}}
            >
              <span>{item.name}</span>
              <SvgIcon name="search" />
            </button>
          );
        })}
    </div>
  );
};

export default SuggestionsMenu;
