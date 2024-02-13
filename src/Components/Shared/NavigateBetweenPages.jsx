import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import useFunctionOnKey from "../../Hooks/useFunctionOnKey";
import useKeyPress from "../../Hooks/useKeyPress";

const NavigateBetweenPages = () => {
  const { numbersOfPages } = useGlobalContext();
  const navigateTo = useNavigate();
  const [pressedKey] = useKeyPress();
  const pressNumberKey = pressedKey.match(/\d/g)?.[0];
  const pagesKeys = Array.from(
    { length: numbersOfPages },
    (_, i) => `Digit${i + 1}`
  );

  useFunctionOnKey(
    () => {
      navigateTo(`?page=${pressNumberKey}`);
    },
    pagesKeys,
    300,
    true,
    true
  );

  return null;
};
export default NavigateBetweenPages;
