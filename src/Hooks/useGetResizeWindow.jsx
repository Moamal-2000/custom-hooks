import { useEffect, useState } from "react";

const useGetResizeWindow = () => {
  const [sizes, setSizes] = useState({
    width: innerWidth,
    height: innerHeight,
  });

  useEffect(() => {
    let timerId;

    function handleResize() {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        setSizes({
          width: innerWidth,
          height: innerHeight,
        });
      }, 300);
    }

    handleResize();
    window.addEventListener("resize", () => handleResize());

    return () => window.removeEventListener("resize", () => handleResize());
  }, []);

  return sizes;
};

export default useGetResizeWindow;
