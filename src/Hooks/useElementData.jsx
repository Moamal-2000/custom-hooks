import { useEffect, useState } from "react";
import useOnScreen from "./useOnScreen";

const useElementData = (ref) => {
  const [elementData, setElementData] = useState({});
  const [renders, setRenders] = useState(0);
  const isVisible = useOnScreen(ref);

  function updateData() {
    const elementRectData = ref.current.getBoundingClientRect();
    const data = Object.assign(elementRectData, { isVisible });
    setElementData(data);
  }

  useEffect(() => {
    updateData();
  }, []);

  useEffect(() => {
    updateData();
  }, [renders, isVisible]);

  return [ref.current, elementData, setRenders];
};
export default useElementData;
