import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import styles from "./CodeBlockHeader.module.scss";

const CodeBlockHeader = ({
  props: { displayedCodeName, setDisplayedCodeName, codes },
}) => {
  return (
    <header className={styles.header}>
      {codes.map(({ name }, i) => (
        <button
          key={i}
          type="button"
          className={`${styles.fileName} ${
            displayedCodeName === name ? styles.active : ""
          }`}
          onClick={() => setDisplayedCodeName(name)}
        >
          <SvgIcon name="react" />
          <span>{name}.jsx</span>
        </button>
      ))}
    </header>
  );
};
export default CodeBlockHeader;
