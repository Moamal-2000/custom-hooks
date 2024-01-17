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
];
