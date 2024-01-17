import { useEffect, useState } from "react";

const useGetResizeWindow = () => {
  const [sizes, setSizes] = useState({});

  function handleResize() {
    setSizes({
      width: innerWidth,
      height: innerHeight,
    });
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", () => handleResize());

    return () => window.removeEventListener("resize", () => handleResize());
  }, []);

  return sizes;
};
export default useGetResizeWindow;
