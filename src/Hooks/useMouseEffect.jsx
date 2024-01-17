import { useEffect } from "react";

const useMouseEffect = (
  ref,
  { activeClass = "active", isActiveOnHover = false, hoverElements = [] }
) => {
  function handleMouseMove(e) {
    if (!ref.current?.classList?.contains(activeClass))
      setTimeout(() => ref.current?.classList?.add(activeClass), 500);

    const clientX = e.clientX;
    const clientY = e.clientY;
    const halfWidthRef = ref.current?.clientWidth / 2;
    const halfHeightRef = ref.current?.clientHeight / 2;

    ref.current.style.cssText = `
      position: absolute;
      left: ${clientX - halfWidthRef}px;
      top: ${clientY - halfHeightRef}px;
      pointer-events: none;
    `;

    if (hoverElements.length === 0 || !isActiveOnHover) return;
    handleHoverOnElements(e);
  }

  function handleHoverOnElements(e) {
    const hoveredElementName = e.target.tagName.toLowerCase();
    const isHoveredOnSpecificTags =
      hoverElements.filter((tagName) => tagName === hoveredElementName)
        .length !== 0;

    ref.current?.classList?.[isHoveredOnSpecificTags ? "add" : "remove"](
      "mouse-hover"
    );
  }

  useEffect(() => {
    window.addEventListener("mousemove", (e) => handleMouseMove(e));

    return () => {
      window.removeEventListener("mousemove", (e) => handleMouseMove(e));
    };
  }, []);
};
export default useMouseEffect;
