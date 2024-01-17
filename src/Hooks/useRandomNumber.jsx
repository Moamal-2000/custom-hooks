import { useEffect, useState } from "react";

const useRandomNumber = (min, max) => {
  const [randomNumber, setRandomNumber] = useState(0);

  function changeRandomNumber(getMin = min, getMax = max) {
    ++getMax
    setRandomNumber(Math.floor(Math.random() * (getMin - getMax) + getMax));
  }

  useEffect(() => {
    ++max
    setRandomNumber(Math.floor(Math.random() * (min - max) + max));
  }, []);

  return { randomNumber, changeRandomNumber };
};
export default useRandomNumber;
