import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "src/Context/GlobalContext";
import { NUMBER_OF_PAGES } from "src/Data/variables";
import { getPageKeys } from "src/Functions/projectFunctions";
import useFunctionOnKey from "src/Hooks/useFunctionOnKey";

const NavigateBetweenPages = () => {
  const { pressedKey } = useGlobalContext();
  const navigateTo = useNavigate();
  const pressNumberKey = pressedKey.match(/\d/)?.[0];
  const pagesKeys = getPageKeys(NUMBER_OF_PAGES);

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
