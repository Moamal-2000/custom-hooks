import { useState } from "react";

const useLocalStorage = (keyName, initialData) => {
  const localData = localStorage.getItem(keyName);
  const [data, setData] = useState(
    !localData ? initialData : JSON.parse(localData)
  );

  function setDataFun(getData) {
    localStorage.setItem(keyName, JSON.stringify(getData));
    setData(JSON.stringify(getData));
  }

  return [data, setDataFun];
};

export default useLocalStorage;
