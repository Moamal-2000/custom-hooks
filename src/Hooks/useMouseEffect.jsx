import { useEffect } from "react";

const useMouseEffect = (
  ref,
  { activeClass = "active", isActiveOnHover = false, hoverElements = [] }
) => {
  function handleMouseMove(e) {
    if (!ref.current?.classList?.contains(activeClass))
      setTimeout(() => ref.current?.classList?.add(activeClass), 500);

    const element = ref.current;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const halfWidthRef = ref.current?.clientWidth / 2;
    const halfHeightRef = ref.current?.clientHeight / 2;

    element.style.position = "absolute";
    element.style.left = clientX - halfWidthRef + "px";
    element.style.top = clientY - halfHeightRef + "px";
    element.style.pointerEvent = "none";

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
