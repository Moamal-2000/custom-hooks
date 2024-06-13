import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "src/Context/GlobalContext";
import { getPageKeys } from "src/Functions/projectFunctions";
import useFunctionOnKey from "src/Hooks/useFunctionOnKey";

const NavigateBetweenPages = () => {
  const { numbersOfPages, pressedKey } = useGlobalContext();
  const navigateTo = useNavigate();
  const pressNumberKey = pressedKey.match(/\d/)?.[0];
  const pagesKeys = getPageKeys(numbersOfPages);

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
