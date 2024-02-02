import useCopyText from "../../../../Hooks/useCopyText";
import useToggle from "../../../../Hooks/useToggle";

const CopyButton = ({ code }) => {
  const [copiedText, copyText] = useCopyText();
  const [isCopied, toggleIsCopied] = useToggle(false);

  function handleCopyButton() {
    if (isCopied) return;
    copyText(code);
    toggleIsCopied();
    setTimeout(() => toggleIsCopied(), 1000);
  }

  return (
    <button type="button" title="Copy Code" onClick={handleCopyButton}>
      {isCopied ? (
        <i className="fa-solid fa-check"></i>
      ) : (
        <i className="fa-regular fa-copy"></i>
      )}
    </button>
  );
};
export default CopyButton;
