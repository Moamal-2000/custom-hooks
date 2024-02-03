export const hooksData = [
  {
    name: "useToggle",
    page: 1,
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
      "https://codesandbox.io/p/sandbox/usetoggle-dxg958?file=%2Fsrc%2FTest.jsx%3A10%2C11",
    id: 0,
    code: `import { useState } from "react";

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

export default useToggle;`,
  },

  {
    name: "useArray",
    page: 1,
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
    liveCode:
      "https://codesandbox.io/p/sandbox/usearray-rxj3p5?file=%2Fsrc%2FTest.jsx%3A7%2C1",
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
    page: 1,
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
    liveCode:
      "https://codesandbox.io/p/sandbox/usecloseelement-z49szj?file=%2Fsrc%2FTest.jsx%3A8%2C14",
    id: 2,
    code: `import { useEffect, useState } from "react";

const useCloseElement = (toggleEleRef, switcherEleRef, exceptElementRef) => {
  const [isElementClose, setIsElementClose] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!toggleEleRef.current || !switcherEleRef.current) return;

      const target = e.target;
      const isSwitcherEle = target === switcherEleRef?.current;
      const isExceptEle = target === exceptElementRef?.current;
      const isInsideToggle = compareAbsoluteParentEle(
        target,
        toggleEleRef?.current
      );
      const closeElementCondition =
        (!isSwitcherEle && !isInsideToggle) || isExceptEle;

      if (closeElementCondition) setIsElementClose(false);
      else if (isSwitcherEle) setIsElementClose((prevState) => !prevState);
    };

    window.addEventListener("click", handleDocumentClick);

    return () => window.removeEventListener("click", handleDocumentClick);
  }, [toggleEleRef, switcherEleRef, exceptElementRef]);

  return [isElementClose, setIsElementClose];
};

export default useCloseElement;

/* Helper function */
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
    page: 1,
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
    liveCode:
      "https://codesandbox.io/p/sandbox/usecopytext-fcqtfr?file=%2Fsrc%2FuseCopyText.jsx%3A6%2C12",
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
    page: 1,
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
    page: 2,
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
    liveCode:
      "https://codesandbox.io/p/sandbox/useeventlistener-9tcp7n?file=%2Fsrc%2FuseEventListener.jsx%3A1%2C5",
    id: 5,
    code: `import { useEffect } from "react";

const useEventListener = (ref, eventName, callback) => {
  useEffect(() => {
    const element = ref.current ? ref.current : ref;

    element?.addEventListener(eventName, callback);

    return () => element?.removeEventListener(eventName, callback);
  }, []);
};

export default useEventListener;`,
  },

  {
    name: "useFilter",
    page: 2,
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
    liveCode:
      "https://codesandbox.io/p/sandbox/usefilter-qjd5tl?file=%2Fsrc%2FTest.jsx%3A3%2C1",
    id: 6,
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
    page: 2,
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
    id: 7,
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

  return allParams;
};

export default useGetParams;`,
  },

  {
    name: "useGetResizeWindow",
    page: 2,
    explanation: [
      `
        The useGetResizeWindow hook tracks the window resize event and returns an object containing the current width and height of the viewport's browser window in pixels.
      `,
    ],
    inputs: [],
    outputs: [
      [
        `sizes (Object):
          An object containing the current width and height of the viewport's browser window.`,
      ],
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usegetresizewindow-nj9n9p?file=%2Fsrc%2FuseGetResizeWindow.jsx%3A3%2C15",
    id: 8,
    code: `import { useEffect, useState } from "react";

const useGetResizeWindow = () => {
  const [sizes, setSizes] = useState({
    width: innerWidth,
    height: innerHeight,
  });

  useEffect(() => {
    let timerId;

    function handleResize() {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        setSizes({
          width: innerWidth,
          height: innerHeight,
        });
      }, 300);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return sizes;
};

export default useGetResizeWindow;`,
  },

  {
    name: "useKeyPress",
    page: 2,
    explanation: [
      `
        The useKeyPress hook tracks keypress events and provides the key code and event object.
      `,
    ],
    inputs: [],
    outputs: [
      [
        `key (String):
          Represents the key code of the pressed key.`,
      ],
      [
        `setKey (Function):
          Function to manually set the key code.`,
      ],
      [
        `event (Object):
          Represents the event object of the keypress event.`,
      ],
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usekeypress-dzgxxj?file=%2Fsrc%2FuseKeyPress.jsx%3A3%2C22",
    id: 9,
    code: `import { useEffect, useState } from "react";

const useKeyPress = () => {
  const [event, setEvent] = useState({});
  const [key, setKey] = useState("");

  function handleKeyPress(e) {
    setEvent(e);
    setKey(e.code);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () =>
      window.removeEventListener("keydown", (e) => handleKeyPress(e));
  }, []);

  return [key, setKey, event];
};

export default useKeyPress;`,
  },

  {
    name: "useLocalStorage",
    page: 3,
    explanation: [
      `
        The useLocalStorage hook provides a way to store and retrieve data in the browser's local storage.
        It takes a key name and initial data as inputs and returns the stored data along with a function to update it in the local storage.
      `,
    ],
    inputs: [
      [
        `keyName (String):
          The name under which the data will be stored in the local storage.`,
      ],
      [
        `initialData (Any):
          The initial data to be stored if no data exists in the local storage under the given key name.`,
      ],
    ],
    outputs: [
      [
        `data (Any):
          The data retrieved from the local storage.`,
      ],
      [
        `setDataFun (Function):
          A function to update the data in the local storage.`,
      ],
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/uselocalstorage-6hy7w2?file=%2Fsrc%2FTest.jsx%3A2%2C8",
    id: 10,
    code: `import { useState } from "react";

const useLocalStorage = (keyName, initialData) => {
  const localData = localStorage.getItem(keyName);
  const [data, setData] = useState(
    !localData ? initialData : JSON.parse(localData)
  );

  function setDataFun(getData) {
    let stringifyData = JSON.stringify(getData)

    if (stringifyData === "true") stringifyData = true
    else if (stringifyData === "false") stringifyData = false

    localStorage.setItem(keyName, stringifyData);
    setData(stringifyData);
  }

  return [data, setDataFun];
};

export default useLocalStorage;`,
  },

  {
    name: "useOnlineStatus",
    page: 3,
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
    liveCode:
      "https://codesandbox.io/p/sandbox/useonlinestatus-49z4lv?file=%2Fsrc%2FuseOnlineStatus.jsx%3A5%2C1",
    id: 12,
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
      document.removeEventListener("offline", checkOfflineStatus);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;`,
  },

  {
    name: "useOnScreen",
    page: 3,
    explanation: [
      "The useOnScreen hook detects whether a specified DOM element is visible on the screen.",
    ],
    inputs: [
      [
        "ref (React ref): Ref of the DOM element to be observed for visibility.",
      ],
      [
        "options (Object): Optional object with configuration options for the IntersectionObserver.",
        " - rootMargin (String): The margin around the root (viewport) to consider when triggering visibility changes.",
        " - threshold (Number or Array of Numbers): A single number or an array of numbers between 0 and 1 indicating at what percentage of the target's visibility the observer's callback should be executed.",
      ],
    ],
    outputsText:
      "The useOnScreen hook returns a boolean indicating whether the element is visible.",
    outputs: [
      [
        "isVisible (Boolean): True if the observed element is visible, false otherwise.",
      ],
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/useonscreen-zkvlhy?file=%2Fsrc%2FuseOnScreen.jsx%3A5%2C1",
    id: 13,
    code: `import { useEffect, useState } from "react";

function useOnScreen(ref, options = { rootMargin: "0px", threshold: 1 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
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
    page: 3,
    explanation: [
      "The usePageBottom hook detects whether the user has scrolled to the bottom of the page.",
    ],
    inputs: [
      [
        "marginBottom (Number): Optional margin from the bottom of the page to consider when determining if scrolled to the bottom. Default is 1.",
      ],
    ],
    outputsText:
      "The usePageBottom hook returns a boolean indicating whether the page is scrolled to the bottom.",
    outputs: [
      [
        "isScrolledToBottom (Boolean): True if the page is scrolled to the bottom, false otherwise.",
      ],
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usepagebottom-lg2clp?file=%2Fsrc%2FTest.jsx%3A5%2C1",
    id: 14,
    code: `import { useEffect, useState } from "react";

const usePageBottom = (marginBottom = 1) => {
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
    setIsScrolledToBottom(documentHeight - windowHeight <= scrollPosition + marginBottom);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolledToBottom;
};

export default usePageBottom;`,
  },

  {
    name: "usePreviousState",
    page: 3,
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
    liveCode:
      "https://codesandbox.io/p/sandbox/usepreviousstate-yns2hn?file=%2Fsrc%2FusePreviousState.jsx%3A1%2C9",
    id: 15,
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
    page: 4,
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
    liveCode:
      "https://codesandbox.io/p/sandbox/usetextinput-ss44cm?file=%2Fsrc%2FTest.jsx%3A10%2C4",
    id: 16,
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
    page: 4,
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
      "The useRandomNumber hook returns an array containing the current random number and a function to change the random number within the specified range.",
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
    liveCode:
      "https://codesandbox.io/s/sandbox-userandomnumber-cfhdkv?file=/src/Test.jsx",
    id: 17,
    code: `import { useState } from "react";

const useRandomNumber = (min = 0, max = 1000) => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber(min, max));

  function changeRandomNumber(newMin = min, newMax = max) {
    let newRandomNumber = generateRandomNumber(newMin, newMax);

    while (newRandomNumber === randomNumber) {
      newRandomNumber = generateRandomNumber(newMin, newMax);
    }

    setRandomNumber(newRandomNumber);
  }

  return [randomNumber, changeRandomNumber];
};

export default useRandomNumber;

/* Helper Function */
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}`,
  },

  {
    name: "useMouseEffect",
    page: 4,
    explanation: [
      "The useMouseEffect hook applies effects related to mouse movements on a specified element.",
      "It allows adding a custom class when the mouse is active, positioning the element based on mouse coordinates,",
      "and toggling a class on specified elements when the mouse hovers over them.",
    ],
    inputs: [
      [
        "mouseEffectRef (React ref): Ref for the element on which mouse effects will be applied.",
      ],
      [
        "options (Object): An object containing optional parameters:",
        "- activeClass (String, default: 'active'): Class to be added when the mouse is active.",
        "- isActiveOnHover (Boolean, default: false): Determines if the activeClass should be applied on hover.",
        "- hoverElements (Array, default: []): Array of tag names on which hover effects should be applied.",
      ],
    ],
    outputs: [],
    liveCode:
      "https://codesandbox.io/p/sandbox/usemouseeffect-t4mzrz?file=%2Fsrc%2FuseMouseEffect.jsx%3A1%2C13",
    id: 18,
    code: `import { useEffect } from "react";

const useMouseEffect = (
  mouseEffectRef,
  activeClass = "active",
  hoverElements = [],
  activeTime = 500
) => {
  function handleMouseMove(e) {
    const mouseEffectEle = mouseEffectRef.current;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const halfWidthRef = mouseEffectEle.clientWidth / 2;
    const halfHeightRef = mouseEffectEle.clientHeight / 2;
    const isContainsActiveClass =
      !mouseEffectEle.classList.contains(activeClass);

    if (isContainsActiveClass)
      setTimeout(() => mouseEffectEle.classList.add(activeClass), activeTime);

    mouseEffectEle.style.left = clientX - halfWidthRef + "px";
    mouseEffectEle.style.top = clientY - halfHeightRef + "px";

    if (hoverElements.length === 0) return;
    handleHoverOnElements(e);
  }

  function handleHoverOnElements(e) {
    const hoveredElementName = e.target.tagName.toLowerCase();
    const hoveredElements = hoverElements.filter(
      (tagName) => tagName === hoveredElementName
    );
    const isHoveredOnSpecificTags = hoveredElements.length !== 0;

    mouseEffectRef.current.classList[
      isHoveredOnSpecificTags ? "add" : "remove"
    ]("mouseHover");
  }

  useEffect(() => {
    window.addEventListener("mousemove", (e) => handleMouseMove(e));

    return () =>
      window.removeEventListener("mousemove", (e) => handleMouseMove(e));
  }, []);
};

export default useMouseEffect;`,
  },

  {
    name: "useFunctionOnKey",
    page: 4,
    explanation: [
      `
        The useFunctionOnKey hook listens for a specific key press and triggers a callback function when that key is pressed.
      `,
    ],
    inputs: [
      [
        `callback (Function):
          The function to be called when the specified key is pressed.`,
      ],
      [
        `keyName (String):
          The name of the key to listen for.`,
      ],
    ],
    outputs: [],
    liveCode:
      "https://codesandbox.io/p/sandbox/usefunctiononkey-mfpznn?file=%2Fsrc%2FuseKeyPress.jsx%3A6%2C1",
    id: 19,
    code: `import { useEffect } from "react";
import useKeyPress from "./useKeyPress";

const useFunctionOnKey = (callback, keyName) => {
  const [pressedKey, setKey] = useKeyPress();

  useEffect(() => {
    if (pressedKey === keyName) {
      callback();
      setKey("");
    }
  }, [pressedKey]);
};

export default useFunctionOnKey;`,
  },
];
