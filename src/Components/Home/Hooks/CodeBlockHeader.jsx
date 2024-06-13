import { useGlobalContext } from "src/Context/GlobalContext";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./CodeBlockHeader.module.scss";

const CodeBlockHeader = ({
  props: { displayedCodeName, setDisplayedCodeName, codes },
}) => {
  const { windowWidth } = useGlobalContext();
  const tabletsScreenSize = 768;
  const isTablesScreen = tabletsScreenSize > windowWidth;

  return (
    <header className={s.header}>
      {codes.map(({ name }, i) => {
        if (i !== 0 && isTablesScreen) return;

        return (
          <button
            key={i}
            type="button"
            className={`${s.fileName} ${
              displayedCodeName === name ? s.active : ""
            }`}
            onClick={() => setDisplayedCodeName(name)}
          >
            <SvgIcon name="react" />
            <span>{name}.jsx</span>
          </button>
        );
      })}
    </header>
  );
};
export default CodeBlockHeader;
