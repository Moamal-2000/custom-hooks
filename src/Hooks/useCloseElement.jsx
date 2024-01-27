import { useEffect, useState } from "react";

const useCloseElement = (toggleEleRef, switcherEleRef, exceptElementRef) => {
  const [isElementClose, setIsElementClose] = useState(false);

  function handleDocumentClick(e) {
    if (!toggleEleRef.current || !switcherEleRef.current) return;

    const target = e.target;
    const isSwitcherEle = target === switcherEleRef.current;
    const isExceptEle = target === exceptElementRef?.current;
    const isInsideToggle = compareAbsoluteParentEle(
      target,
      toggleEleRef.current
    );
    const closeElementCondition =
      (!isSwitcherEle && !isInsideToggle) || isExceptEle;

    if (closeElementCondition) setIsElementClose(true);
    else if (isSwitcherEle) setIsElementClose((prevState) => !prevState);
  }

  useEffect(() => {
    window.addEventListener("click", (e) => handleDocumentClick(e));

    return () => {
      window.removeEventListener("click", (e) => handleDocumentClick(e));
    };
  }, []);

  return [ isElementClose, setIsElementClose ];
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