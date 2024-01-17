import { useState } from "react";

const useArray = (initArray) => {
  const [array, setArray] = useState(initArray);
  const copiedArray = array;
  const clear = () => setArray([]);
  const set = (newArray) => setArray([...newArray]);
  const push = (item) => setArray((oldArr) => [...oldArr, item]);
  const filter = (callback) => setArray([...array.filter(callback)]);

  function update(oldValue, newValue) {
    const requiredIndex = array.indexOf(
      copiedArray.find((item) => item === oldValue)
    );

    copiedArray[requiredIndex] = newValue;
    setArray([...copiedArray]);
  }

  function remove(item) {
    const filteredArray = copiedArray.filter((arrItem) => item !== arrItem);
    setArray([...filteredArray]);
  }

  return { array, push, update, set, remove, clear, filter };
};

export default useArray;
