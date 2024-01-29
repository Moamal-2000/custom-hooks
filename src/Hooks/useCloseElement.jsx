import { useEffect, useState } from "react";

const useCloseElement = (toggleEleRef, switcherEleRef, exceptElementRef) => {
  const [isElementClose, setIsElementClose] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!toggleEleRef.current || !switcherEleRef.current) return;

      const target = e.target;
      const isSwitcherEle = target === switcherEleRef?.current;
      const isExceptEle = target === exceptElementRef?.current;
      const isInsideToggle = compareAbsoluteParentEle(
        target,
        toggleEleRef?.current
      );
      const closeElementCondition =
        (!isSwitcherEle && !isInsideToggle) || isExceptEle;

      if (closeElementCondition) setIsElementClose(false);
      else if (isSwitcherEle) setIsElementClose((prevState) => !prevState);
    };

    window.addEventListener("click", handleDocumentClick);

    return () => window.removeEventListener("click", handleDocumentClick);
  }, [toggleEleRef, switcherEleRef, exceptElementRef]);

  return [isElementClose, setIsElementClose];
};

export default useCloseElement;

// Helper function
const compareAbsoluteParentEle = (element, requiredEle) => {
  let parentElement = element.parentElement;

  while (
    parentElement &&
    requiredEle !== parentElement &&
    requiredEle !== element
  )
    parentElement = parentElement.parentElement;

  return !!parentElement;
};
