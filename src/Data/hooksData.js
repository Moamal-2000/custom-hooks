export const hooksData = [
  {
    name: "useToggle",
    explanation: ["paragraph", "paragraph", "paragraph"],
    inputs: ["Initial state true/false"],
    outputs: ["state", "toggle function", "custom toggle function"],
    id: 0,
    liveCode:
      "https://codesandbox.io/p/sandbox/usetoggle-dxg958?file=%2Fsrc%2FuseToggle.jsx",
    code: `
    import { useState } from "react";
    const useToggle = (initState = false) => {
      const [state, setState] = useState(initState);

      function toggle() {
        setState((prevState) => !prevState);
      }

      return [state, toggle];
    };
    export default useToggle;`,
  },
  {
    name: "useRandomNumber",
    explanation: ["paragraph", "paragraph", "paragraph"],
    inputs: ["Minimum number", "Maximum number"],
    outputs: ["Random number", "function to generate a new random number"],
    id: 1,
    liveCode:
      "",
    code: `
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
    export default useRandomNumber;`,
  },
];
