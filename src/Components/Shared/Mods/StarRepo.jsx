import { useRef } from "react";
import useFunctionOnKey from "../../../Hooks/useFunctionOnKey";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";

const StarRepo = () => {
  const anchorRepoRef = useRef();

  useFunctionOnKey(
    () => anchorRepoRef.current.click(),
    "KeyR",
    300,
    true,
    true
  );

  return (
    <a
      ref={anchorRepoRef}
      href="https://github.com/Moamal-2000/custom-hooks"
      target="_blank"
      aria-label="Star this website on GitHub"
    >
      <SvgIcon name="starSolid" />
      <ToolTip
        arrowDir="right"
        content="Star this website on GitHub"
        left="-225px"
      />
    </a>
  );
};
export default StarRepo;
