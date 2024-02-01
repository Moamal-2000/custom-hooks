import styles from "./SearchHooksInput.module.scss";

const SearchHooksInput = () => {
  return (
    <form
      className={styles.SearchForm}
      onSubmit={(e) => e.preventDefault()}
      role="search"
    >
      <input id="search" type="search" placeholder="Search" autofocus />

      <button type="submit">Go</button>
    </form>
  );
};
export default SearchHooksInput;
