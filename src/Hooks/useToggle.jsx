import { useState } from "react";

const useToggle = (initState = false) => {
  const [state, setState] = useState(initState);

  function toggle() {
    setState((prevState) => !prevState);
  }

  function customToggle(value) {
    setState(value);
  }

  return [state, toggle, customToggle];
};

export default useToggle;
