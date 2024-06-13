import { useGlobalContext } from "src/Context/GlobalContext";
import { SCREEN_SIZES } from "src/Data/variables";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./CodeBlockHeader.module.scss";

const CodeBlockHeader = ({ props }) => {
  const { displayedCodeName, setDisplayedCodeName, codes } = props;
  const { windowWidth } = useGlobalContext();
  const isTablesScreen = SCREEN_SIZES.tablet > windowWidth;

  return (
    <header className={s.header}>
      {codes.map(({ name }, index) => {
        if (index !== 0 && isTablesScreen) return;
        const activeClass = displayedCodeName === name ? s.active : "";

        return (
          <button
            key={index}
            type="button"
            className={`${s.fileName} ${activeClass}`}
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
