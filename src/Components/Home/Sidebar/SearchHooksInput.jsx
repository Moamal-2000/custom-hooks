import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { hooksData } from "../../../Data/hooksData";
import styles from "./SearchHooksInput.module.scss";

const SearchHooksInput = () => {
  const [searchInp, setSearchInp] = useState("");
  const navigateTo = useNavigate();
  const { setIsSideBarActive, setIsOverlayActive } = useGlobalContext();

  function handleSearch(e) {
    e.preventDefault();

    const filteredResults = hooksData.filter((hookData) =>
      hookData.name.toLowerCase().startsWith(searchInp.toLowerCase())
    );

    if (filteredResults === 0) return;

    if (filteredResults.length === 1) {
      navigateTo(`/?page=${filteredResults[0].page}`);
    }

    if (filteredResults.length > 1) {
      
    }

    setIsOverlayActive(false);
    setIsSideBarActive(false);
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
        value={searchInp}
        onChange={(e) => setSearchInp(e.target.value)}
      />

      <button type="submit">Go</button>
    </form>
  );
};
export default SearchHooksInput;
