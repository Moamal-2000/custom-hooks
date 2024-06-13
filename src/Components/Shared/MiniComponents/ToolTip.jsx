import s from "./ToolTip.module.scss";

const ToolTip = ({ content, top, right, bottom, left, arrowDir }) => {
  return (
    <span
      data-is-tooltip="true"
      className={`toolTip ${s[arrowDir]}`}
      style={{ top: top, right: right, bottom: bottom, left: left }}
    >
      {content}
    </span>
  );
};
export default ToolTip;
