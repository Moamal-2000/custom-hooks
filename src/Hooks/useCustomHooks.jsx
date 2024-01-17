import useArray from "./useArray";
import useAsync from "./useAsync";
import useEventListener from "./useEventListener";
import useFetchDataFrom from "./useFetchDataFrom";
import useGetParams from "./useGetParams";
import useGetResizeWindow from "./useGetResizeWindow";
import useLocalStorage from "./useLocalStorage";
import useOnScreen from "./useOnScreen";
import usePreviousState from "./usePreviousState";
import useRandomNumber from "./useRandomNumber";
import useToggle from "./useToggle";
import useCloseElement from "./useCloseElement";

const useCustomHooks = () => {
  return {
    useArray,
    useAsync,
    useEventListener,
    useFetchDataFrom,
    useGetParams,
    useGetResizeWindow,
    useLocalStorage,
    useOnScreen,
    usePreviousState,
    useRandomNumber,
    useToggle,
    useCloseElement,
  };
};
export default useCustomHooks;
