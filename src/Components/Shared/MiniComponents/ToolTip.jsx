import styles from "./ToolTip.module.scss";

const ToolTip = ({ content, top, right, bottom, left, arrowDir }) => {
  return (
    <span
      className={`toolTip ${styles[arrowDir]}`}
      style={{ top: top, right: right, bottom: bottom, left: left }}
    >
      {content}
    </span>
  );
};
export default ToolTip;
