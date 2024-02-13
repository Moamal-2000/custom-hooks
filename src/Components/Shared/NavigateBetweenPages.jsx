import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import useFunctionOnKey from "../../Hooks/useFunctionOnKey";

const NavigateBetweenPages = () => {
  const { numbersOfPages, pressedKey } = useGlobalContext();
  const navigateTo = useNavigate();
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
};
export default NavigateBetweenPages;
