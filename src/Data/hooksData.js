export const hooksData = [
  {
    name: "useToggle",
    explanation: [
      `
        The useToggle hook manages a boolean state, providing functions to toggle between true and false.
        It initializes with an optional initial state (default is false).
        It returns the current state, a toggle function, and a custom toggle function.
      `,
    ],
    inputs: [
      [
        `initState (Boolean):
          The initial state for the toggle. Default is false.`,
      ],
    ],
    outputsText:
      "The useToggle hook returns an array with the following elements:",
    outputs: [
      [
        `state (Boolean):
          Represents the current state of the toggle.`,
      ],
      [
        `toggle (Function):
          Toggles the state between true and false.`,
      ],
      [
        `customToggle (Function):
          Custom toggle function that sets the state to a specific value. Usage: customToggle(value).`,
      ],
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usetoggle-dxg958?file=%2Fsrc%2FTest.jsx",
    id: 0,
    code: `import { useState } from "react";

const useToggle = (initState = false) => {
  const [state, setState] = useState(initState);

  const toggle = () => setState((prevState) => !prevState);

  const customToggle = (value) => setState(value);

  return [state, toggle, customToggle];
};

export default useToggle;`,
  },

  {
    name: "useArray",
    explanation: [
      `
        The useArray hook provides a set of functions to manage and manipulate an array state 
        in a React component. It initializes with an initial array (initArray) and exposes methods 
        for common array operations such as adding, updating, removing elements, and more. 
        The hook is particularly useful when dealing with stateful arrays in React components.
      `,
    ],
    inputs: [
      [
        `initArray (Array):
          The initial array with which the state is initialized.`,
      ],
    ],
    outputsText:
      "The useArray hook returns an object with the following methods:",
    outputs: [
      [
        `array (Array):
        Represents the current state of the array.
        `,
      ],
      [
        `
        push (Function):
          Appends a new item to the end of the array.
          Usage: push(item).
        `,
      ],
      [
        `update (Function):
          Updates an existing value in the array.
          Usage: update(oldValue, newValue).
        `,
      ],
      [
        `
        set (Function):
          Sets the entire array to a new value.
          Usage: set(newArray).
        `,
      ],
      [
        `
        remove (Function):
          Removes a specified item from the array.
          Usage: remove(item).`,
      ],
      [
        `
        clear (Function):

          Clears the entire array, making it empty.
          Usage: clear().
        `,
      ],
      [
        ` filter (Function):
          Filters the array based on a provided callback function.
          Usage: filter(callback).`,
      ],
    ],
    liveCode: "https://codesandbox.io/p/sandbox/usearray-rxj3p5?file=%2Fsrc%2FTest.jsx",
    id: 1,
    code: `import { useState } from "react";

const useArray = (initArray) => {
  const [array, setArray] = useState(initArray);
  const copiedArray = array;

  function clear() {
    setArray([]);
  }

  function set(newArray) {
    setArray([...newArray]);
  }

  function push(item) {
    setArray((oldArr) => [...oldArr, item]);
  }

  function filter(callback) {
    setArray([...array.filter(callback)]);
  }

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
export default useArray;`,
  },

  {
    name: "useCloseElement",
    explanation: [
      `
        The useCloseElement hook manages the state of an element's visibility based on clicks outside designated elements.
        It takes three refs - toggleEleRef, switcherEleRef, and exceptElementRef to control the toggle behavior.
        The hook no longer uses isStrictMode.
      `,
    ],
    inputs: [
      [
        `toggleEleRef (React ref):
          Ref for the toggle element that triggers the close behavior.`,
      ],
      [
        `switcherEleRef (React ref):
          Ref for the switcher element that controls the visibility of the element.`,
      ],
      [
        `exceptElementRef (React ref):
          Ref for an optional element that should not trigger the close behavior.`,
      ],
    ],
    outputs: [
      [
        `isElementClose (Boolean):
          Represents the current state of whether the element should be closed.`,
      ],
      [
        `setIsElementClose (Function):
          Function to manually set the state of isElementClose.`,
      ],
    ],
    liveCode: "https://codesandbox.io/p/sandbox/usecloseelement-z49szj?file=%2Fsrc%2FTest.jsx",
    id: 2,
    code: `import { useEffect, useState } from "react";
  
  const useCloseElement = (toggleEleRef, switcherEleRef, exceptElementRef) => {
    const [isElementClose, setIsElementClose] = useState(false);
  
    function handleDocumentClick(e) {
      if (!toggleEleRef.current || !switcherEleRef.current) return;
  
      const target = e.target;
      const isSwitcherEle = target === switcherEleRef.current;
      const isExceptEle = target === exceptElementRef?.current;
      const isInsideToggle = compareAbsoluteParentEle(
        target,
        toggleEleRef.current
      );
      const closeElementCondition =
        (!isSwitcherEle && !isInsideToggle) || isExceptEle;
  
      if (closeElementCondition) setIsElementClose(true);
      else if (isSwitcherEle) setIsElementClose((prevState) => !prevState);
    }
  
    useEffect(() => {
      window.addEventListener("click", (e) => handleDocumentClick(e));
  
      return () => {
        window.removeEventListener("click", (e) => handleDocumentClick(e));
      };
    }, []);
  
    return { isElementClose, setIsElementClose };
  };
  export default useCloseElement;
  
  // Helper function
  const compareAbsoluteParentEle = (element, requiredEle) => {
    let parentElement = element.parentElement;
  
    while (
      parentElement &&
      requiredEle !== parentElement &&
      requiredEle !== element
    )
      parentElement = parentElement.parentElement;
  
    return !!parentElement;
  };`,
  },

  {
    name: "useCopyText",
    explanation: [
      `
        The useCopyText hook facilitates copying text to the clipboard. It utilizes the Clipboard API 
        to write the provided text to the clipboard and keeps track of the last copied text.`,
    ],
    inputs: [],
    outputsText:
      "The useCopyText hook returns an array with the following elements:",
    outputs: [
      [
        `copiedText (String):
          Represents the last text that was copied to the clipboard.`,
      ],
      [
        `setCopy (Function):
          Function to copy text to the clipboard. Usage: setCopy(text).`,
      ],
    ],
    liveCode: "#",
    id: 3,
    code: `import { useState } from "react";

const useCopyText = () => {
  const [copiedText, setCopiedText] = useState("");

  function setCopy(text) {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
  }

  return [copiedText, setCopy];
};

export default useCopyText;`,
  },

  {
    name: "useElementData",
    explanation: [
      `
        The useElementData hook provides functionality to gather data about a given DOM element.
        It utilizes the useOnScreen hook to determine if the element is currently visible on the screen.
        The element data includes its dimensions and visibility.`,
    ],
    inputs: [
      [
        `ref (React ref):
          Ref of the element for which data needs to be gathered.`,
      ],
    ],
    outputsText:
      "The useElementData hook returns an array with the following elements:",
    outputs: [
      [
        `element (DOM element):
          The DOM element corresponding to the provided ref.`,
      ],
      [
        `elementData (Object):
          An object containing data about the element, including dimensions and visibility.`,
      ],
      [
        `setRenders (Function):
          Function to increment the renders count, triggering a re-evaluation of element data.`,
      ],
    ],
    liveCode: "#",
    id: 4,
    code: `import { useEffect, useState } from "react";
import useOnScreen from "./useOnScreen";

const useElementData = (ref) => {
  const [elementData, setElementData] = useState({});
  const [renders, setRenders] = useState(0);
  const isVisible = useOnScreen(ref);

  function updateData() {
    const elementRectData = ref.current.getBoundingClientRect();
    const data = Object.assign(elementRectData, { isVisible });
    setElementData(data);
  }

  useEffect(() => {
    updateData();
  }, []);

  useEffect(() => {
    updateData();
  }, [renders, isVisible]);

  return [ref.current, elementData, setRenders];
};

export default useElementData;`,
  },

  {
    name: "useEventListener",
    explanation: [
      `
        The useEventListener hook allows attaching and removing event listeners to a specified DOM element.
        It ensures proper cleanup by removing the event listener when the component unmounts.`,
    ],
    inputs: [
      [
        `element (DOM element):
          The DOM element to which the event listener will be attached.`,
      ],
      [
        `eventName (String):
          The name of the event (e.g., "click", "change").`,
      ],
      [
        `callback (Function):
          The callback function to be executed when the event occurs.`,
      ],
    ],
    outputs: [],
    liveCode: "#",
    id: 5,
    code: `import { useEffect } from "react";

const useEventListener = (element, eventName, callback) => {
  useEffect(() => {
    element.addEventListener(eventName, callback);

    return () => {
      element.removeEventListener(eventName, callback);
    };
  }, []);
};

export default useEventListener;`,
  },

  //   {
  //     name: "useFetchDataFrom",
  //     explanation: [
  //       `
  //         The useFetchDataFrom hook fetches data from a specified URL using the Axios library.`,
  //     ],
  //     inputs: [
  //       [
  //         `url (String):
  //           The URL from which to fetch data.`,
  //       ],
  //     ],
  //     outputsText: "The useFetchDataFrom hook returns the fetched data.",
  //     outputs: [
  //       [
  //         `data (Any):
  //           The fetched data from the specified URL.`,
  //       ],
  //     ],
  //     id: 6,
  //     code: `import { useEffect, useState } from "react";
  // import axios from "axios";

  // export default function useFetchDataFrom(url) {
  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     const getData = async () => {
  //       try {
  //         const res = await axios.get(url);
  //         setData(res.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };

  //     getData();
  //   }, [url]);

  //   return data;
  // }`,
  //   },

  {
    name: "useFilter",
    explanation: [
      `
        The useFilter hook filters an array of objects based on a specified search value and key.`,
    ],
    inputs: [
      [
        `array (Array):
          The array of objects to be filtered.`,
      ],
      [
        `searchValue (String):
          The value to filter the array with.`,
      ],
      [
        `key (String):
          The key in the objects to be used for filtering.`,
      ],
    ],
    outputsText:
      "The useFilter hook returns an array with the filtered objects.",
    outputs: [
      [
        `filteredArr (Array):
          The array containing objects that match the filtering criteria.`,
      ],
      [
        `setFilteredArr (Function):
          Function to manually set the filtered array.`,
      ],
    ],
    liveCode: "https://codesandbox.io/p/sandbox/usefilter-qjd5tl?file=%2Fsrc%2FTest.jsx",
    id: 7,
    code: `import { useEffect, useState } from "react";

const useFilter = (array, searchValue, key) => {
  const [filteredArr, setFilteredArr] = useState(array);

  useEffect(() => {
    const filteredData = array.filter((obj) => {
      return obj[key].toLowerCase().startsWith(searchValue.toLowerCase());
    });

    setFilteredArr(filteredData);
  }, [searchValue]);

  return [filteredArr, setFilteredArr];
};

export default useFilter;`,
  },

  {
    name: "useGetParams",
    explanation: [
      `
        The useGetParams hook extracts query parameters from the current URL.`,
    ],
    inputs: [],
    outputsText:
      "The useGetParams hook returns an object with all extracted query parameters.",
    outputs: [
      [
        `allParams (Object):
          An object containing all the extracted query parameters.`,
      ],
    ],
    liveCode: "#",
    id: 8,
    code: `const useGetParams = () => {
const url = location?.href;
const paramsStr = url?.split("?")[1];
const params = paramsStr?.split("&");
let allParams = {};

params?.forEach((param) => {
  const splitParam = param?.split("=");
  const paramKey = splitParam[0];
  const paramValue = splitParam[1];

  allParams = { ...allParams, [paramKey]: paramValue };
});

return { allParams };
};

export default useGetParams;`,
  },

  {
    name: "useGetResizeWindow",
    explanation: [
      `
        The useGetResizeWindow hook provides the current dimensions of the window and updates them on window resize.`,
    ],
    inputs: [],
    outputsText:
      "The useGetResizeWindow hook returns an object with the current window dimensions.",
    outputs: [
      [
        `sizes (Object):
          An object containing the current window dimensions (width and height).`,
      ],
    ],
    liveCode: "#",
    id: 9,
    code: `import { useEffect, useState } from "react";

const useGetResizeWindow = () => {
  const [sizes, setSizes] = useState({});

  function handleResize() {
    setSizes({
      width: innerWidth,
      height: innerHeight,
    });
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", () => handleResize());

    return () => window.removeEventListener("resize", () => handleResize());
  }, []);

  return sizes;
};

export default useGetResizeWindow;`,
  },
  {
    name: "useKeyPress",
    explanation: [
      `
        The useKeyPress hook detects key presses and provides information about the pressed key.`,
    ],
    inputs: [],
    outputsText:
      "The useKeyPress hook returns an array with the pressed key and the related event object.",
    outputs: [
      [
        `key (String):
          The code of the pressed key.`,
      ],
      [
        `event (Object):
          The event object related to the key press.`,
      ],
    ],
    liveCode: "#",
    id: 10,
    code: `import { useEffect, useState } from "react";

const useKeyPress = () => {
  const [event, setEvent] = useState({});
  const [key, setKey] = useState("");

  function handleKeyPress(e) {
    setEvent(e);
    setKey(e.code);
  }

  useEffect(() => {
    window.addEventListener("keydown", (e) => handleKeyPress(e));

    return () => {
      window.removeEventListener("keydown", (e) => handleKeyPress(e));
    };
  }, []);

  return [key, event];
};

export default useKeyPress;`,
  },
  {
    name: "useLocalStorage",
    explanation: [
      `
        The useLocalStorage hook provides a way to interact with the browser's localStorage.`,
    ],
    inputs: [
      [
        `keyName (String):
          The key under which the data is stored in localStorage.`,
      ],
      [
        `data (Any):
          The data to be stored in localStorage. If not provided, the hook retrieves the stored data.`,
      ],
    ],
    outputsText:
      "The useLocalStorage hook returns the stored data from localStorage.",
    outputs: [
      [
        `storedData (Any):
          The data retrieved from localStorage.`,
      ],
    ],
    liveCode: "#",
    id: 11,
    code: `const useLocalStorage = (keyName, data) => {
  const localData = localStorage.getItem(keyName)
  if (!data) return JSON.parse(localData)

  localStorage.setItem(keyName, JSON.stringify(data))
  return JSON.parse(localData)
}

export default useLocalStorage;`,
  },

  {
    name: "useMouseEffect",
    explanation: [
      `
          The useMouseEffect hook adds visual effects to a DOM element based on mouse movement.`,
    ],
    inputs: [
      [
        `ref (React ref):
            Ref of the DOM element to which the mouse effect will be applied.`,
      ],
      [
        `options (Object):
            Object containing options for the mouse effect:
            - activeClass (String): Class added to the element during the mouse effect.
            - isActiveOnHover (Boolean): Flag to activate the effect only on hover.
            - hoverElements (Array): Array of HTML tag names on which to trigger the hover effect.`,
      ],
    ],
    outputs: [],
    liveCode:
      "https://codesandbox.io/p/sandbox/usemouseeffect-qwj9qt?file=%2Fsrc%2FTest.jsx",
    id: 12,
    code: `import { useEffect } from "react";

const useMouseEffect = (
  ref,
  { activeClass = "active", isActiveOnHover = false, hoverElements = [] }
) => {
  function handleMouseMove(e) {
    if (!ref.current?.classList?.contains(activeClass))
      setTimeout(() => ref.current?.classList?.add(activeClass), 500);

    const element = ref.current;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const halfWidthRef = ref.current?.clientWidth / 2;
    const halfHeightRef = ref.current?.clientHeight / 2;

    element.style.position = "absolute";
    element.style.left = clientX - halfWidthRef + "px";
    element.style.top = clientY - halfHeightRef + "px";
    element.style.pointerEvent = "none";

    if (hoverElements.length === 0 || !isActiveOnHover) return;
    handleHoverOnElements(e);
  }

  function handleHoverOnElements(e) {
    const hoveredElementName = e.target.tagName.toLowerCase();
    const isHoveredOnSpecificTags =
      hoverElements.filter((tagName) => tagName === hoveredElementName)
        .length !== 0;

    ref.current?.classList?.[isHoveredOnSpecificTags ? "add" : "remove"](
      "mouse-hover"
    );
  }

  useEffect(() => {
    window.addEventListener("mousemove", (e) => handleMouseMove(e));

    return () => {
      window.removeEventListener("mousemove", (e) => handleMouseMove(e));
    };
  }, []);
};
export default useMouseEffect;`,
  },

  {
    name: "useOnlineStatus",
    explanation: [
      `
        The useOnlineStatus hook detects the online/offline status of the user's device.`,
    ],
    inputs: [],
    outputsText:
      "The useOnlineStatus hook returns a boolean indicating the online status.",
    outputs: [
      [
        `isOnline (Boolean):
          True if the device is online, false if it is offline.`,
      ],
    ],
    liveCode: "#",
    id: 13,
    code: `import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(false);

  function checkOnlineStatus() {
    setIsOnline(true);
  }

  function checkOfflineStatus() {
    setIsOnline(false);
  }

  useEffect(() => {
    checkOnlineStatus();
    window.addEventListener("online", checkOnlineStatus);
    window.addEventListener("offline", checkOfflineStatus);

    return () => {
      document.removeEventListener("online", checkOnlineStatus);
      document.removeEventListener("online", checkOfflineStatus);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;`,
  },

  {
    name: "useOnScreen",
    explanation: [
      `
        The useOnScreen hook detects whether a specified DOM element is visible on the screen.`,
    ],
    inputs: [
      [
        `ref (React ref):
          Ref of the DOM element to be observed for visibility.`,
      ],
      [
        `rootMargin (String):
          The margin around the root (viewport) to consider when triggering visibility changes.`,
      ],
    ],
    outputsText:
      "The useOnScreen hook returns a boolean indicating whether the element is visible.",
    outputs: [
      [
        `isVisible (Boolean):
          True if the observed element is visible, false otherwise.`,
      ],
    ],
    liveCode: "#",
    id: 14,
    code: `import { useEffect, useState } from "react";

function useOnScreen(ref, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (!ref.current) return;
      observer.unobserve(ref.current);
    };
  }, []);

  return isVisible;
}

export default useOnScreen;`,
  },

  {
    name: "usePageBottom",
    explanation: [
      `
        The usePageBottom hook detects whether the user has scrolled to the bottom of the page.`,
    ],
    inputs: [],
    outputsText:
      "The usePageBottom hook returns a boolean indicating whether the page is scrolled to the bottom.",
    outputs: [
      [
        `isScrolledToBottom (Boolean):
          True if the page is scrolled to the bottom, false otherwise.`,
      ],
    ],
    id: 15,
    code: `import { useEffect, useState } from "react";

const usePageBottom = () => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const htmlElement = document.documentElement;
    const documentHeight = Math.max(
      htmlElement.clientHeight,
      htmlElement.scrollHeight,
      htmlElement.offsetHeight
    );
    setIsScrolledToBottom(documentHeight - windowHeight <= scrollPosition + 1);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrolledToBottom;
};

export default usePageBottom;`,
  },

  {
    name: "usePreviousState",
    explanation: [
      `
        The usePreviousState hook tracks the previous state of a component.`,
    ],
    inputs: [
      [
        `state (Any):
          The current state that needs to be tracked.`,
      ],
    ],
    outputsText: "The usePreviousState hook returns the previous state.",
    outputs: [
      [
        `oldState (Any):
          The previous state of the component.`,
      ],
    ],
    liveCode: "#",
    id: 16,
    code: `import { useEffect, useRef } from "react";

const usePreviousState = (state) => {
  const oldState = useRef(state);

  useEffect(() => {
    oldState.current = state;
  }, [state]);

  return oldState.current;
};

export default usePreviousState;
`,
  },

  {
    name: "useTextInput",
    explanation: [
      `
        The useTextInput hook manages the state of a text input field.`,
    ],
    inputs: [
      [
        `initialValue (String):
          The initial value of the text input field. Default is an empty string.`,
      ],
    ],
    outputsText:
      "The useTextInput hook returns an array with the current value, input attributes, and a function to set the value.",
    outputs: [
      [
        `value (String):
          The current value of the text input field.`,
      ],
      [
        `attributes (Object):
          An object containing attributes for the text input field, including type, value, and onChange.`,
      ],
      [
        `setValue (Function):
          Function to manually set the value of the text input field. Usage: setValue(newValue).`,
      ],
    ],
    liveCode: "https://codesandbox.io/p/sandbox/usetextinput-ss44cm?file=%2Fsrc%2FTest.jsx%3A10%2C4",
    id: 17,
    code: `import { useState } from "react";

const useTextInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const attributes = {
    type: "text",
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, attributes, setValue];
};

export default useTextInput;`,
  },

  {
    name: "useRandomNumber",
    explanation: [
      `
        The useRandomNumber hook generates a random number within a specified range.`,
    ],
    inputs: [
      [
        `min (Number):
          The minimum value of the random number range.`,
      ],
      [
        `max (Number):
          The maximum value of the random number range.`,
      ],
    ],
    outputsText:
      "The useRandomNumber hook returns an object with the current random number and a function to change the random number within the specified range.",
    outputs: [
      [
        `randomNumber (Number):
          The current random number within the specified range.`,
      ],
      [
        `changeRandomNumber (Function):
          Function to change the random number within the specified range. Usage: changeRandomNumber(newMin, newMax).`,
      ],
    ],
    liveCode: "#",
    id: 18,
    code: `import { useEffect, useState } from "react";

const useRandomNumber = (min, max) => {
  const [randomNumber, setRandomNumber] = useState(0);

  function changeRandomNumber(getMin = min, getMax = max) {
    ++getMax;
    setRandomNumber(Math.floor(Math.random() * (getMin - getMax) + getMax));
  }

  useEffect(() => {
    ++max;
    setRandomNumber(Math.floor(Math.random() * (min - max) + max));
  }, []);

  return { randomNumber, changeRandomNumber };
};

export default useRandomNumber;`,
  },
];
