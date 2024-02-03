import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import { hooksData } from "../../Data/hooksData";
import useArray from "../../Hooks/useArray";
import useToggle from "../../Hooks/useToggle";
import styles from "./SearchHooksInput.module.scss";

const SearchHooksInput = () => {
  const searchInpRef = useRef();
  const navigateTo = useNavigate();
  const { setIsSideBarActive, setIsOverlayActive } = useGlobalContext();
  const { array: searchItems, set: setSearchItems } = useArray([]);
  const [isSuggestionMenuActive, _, setSuggestionsActive] = useToggle();

  function handleSearch(e) {
    e.preventDefault();

    const filteredResults = hooksData.filter((hookData) =>
      hookData.name
        .toLowerCase()
        .startsWith(searchInpRef.current?.value?.toLowerCase())
    );
    const isNotFound = filteredResults === 0;
    const isFound = filteredResults.length === 1;

    if (isNotFound) return;
    if (isFound) navigateToItem(filteredResults[0])
    if (filteredResults.length > 1) {
      setSuggestionsActive(true);
      setSearchItems(filteredResults);
    }

    setIsOverlayActive(false);
    setIsSideBarActive(false);
  }

  function navigateToItem(itemData) {
    navigateTo(`/?page=${itemData.page}`);

    setTimeout(() => {
      const sidebarLinksHooks =
        document.querySelectorAll("aside>div>ul>li>a");

      sidebarLinksHooks.forEach((hookLink) => {
        if (hookLink.textContent === itemData.name)
          hookLink.click();
      });
    }, 200);

    setSearchInp("");
  }

  return (
    <>
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
      </form>

      <ul
        className={`${styles.suggestionMenu} ${
          isSuggestionMenuActive ? styles.active : ""
        }`}
      >
        {searchItems?.map((item) => (
          <li
            key={item.id}
            className={styles.searchItem}
            onClick={() => navigateToItem(item)}
          >
            <span>{item.name}</span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
        ))}
      </ul>
    </>
  );
};
export default SearchHooksInput;
