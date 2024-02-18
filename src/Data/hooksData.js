const originalHooksData = [
  {
    name: "usePreviousState",
    explanation: [
      `The usePreviousState hook is a custom React hook designed to track the previous state of a component.
      This can be particularly useful in scenarios where you need to compare the current state with the
      previous state to determine changes or trigger certain actions.`,
    ],
    inputs: ["state (Any): The current state that needs to be tracked."],
    outputs: ["oldState (Any): The previous state of the component."],
    liveCode:
      "https://codesandbox.io/p/sandbox/usepreviousstate-yns2hn?file=%2Fsrc%2FTest.jsx%3A4%2C33",
    id: 0,
    codes: [
      {
        name: "usePreviousState",
        code: `import { useEffect, useRef } from "react";

const usePreviousState = (state) => {
  const oldState = useRef(state);

  useEffect(() => {
    oldState.current = state;
  }, [state]);

  return oldState.current;
};

export default usePreviousState;`,
      },
    ],
  },

  {
    name: "useCopyText",
    explanation: [
      `The useCopyText hook facilitates copying text to the clipboard. It utilizes the Clipboard API 
      to write the provided text to the clipboard and keeps track of the last copied text.`,
    ],
    outputs: [
      "copiedText (String): Represents the last text that was copied to the clipboard.",
      "setCopy (Function): Function to copy text to the clipboard. Usage: setCopy(text).",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usecopytext-fcqtfr?file=%2Fsrc%2FTest.jsx%3A6%2C33",
    id: 1,
    codes: [
      {
        name: "useCopyText",
        code: `import { useEffect, useRef, useState } from "react";

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
    ],
  },

  {
    name: "useToggle",
    explanation: [
      `The useToggle hook is a custom React hook designed to manage a boolean state, providing
      a function to toggle between true and false. This hook simplifies the management of boolean
      states in React components by encapsulating state logic and providing a convenient toggle function.`,
    ],
    inputs: [
      "initialValue (Boolean): The initial state for the toggle. Default is false.",
    ],
    outputs: [
      "value (Boolean): Represents the current state of the toggle.",
      "toggleValue (Function): Toggles the state between true and false or sets it to a specific boolean value.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usetoggle-dxg958?file=%2Fsrc%2FTest.jsx%3A8%2C46",
    id: 2,
    codes: [
      {
        name: "useToggle",
        code: `
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  function toggleValue(value) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
};

export default useToggle;`,
      },
    ],
  },

  {
    name: "useArray",
    explanation: [
      `The useArray hook provides a set of functions to manage and manipulate an array state
      in a React component. It initializes with an initial array (initArray) and exposes methods
      for common array operations such as adding, updating, removing elements, and more.
      The hook is particularly useful when dealing with stateful arrays in React components.`,
    ],
    inputs: [
      "initArray (Array): The initial array with which the state is initialized.",
    ],
    outputs: [
      "array (Array): Represents the current state of the array.",
      "push (Function): Appends a new item to the end of the array.",
      "update (Function): Updates an existing value in the array.",
      "set (Function): Sets the entire array to a new value.",
      "remove (Function): Removes a specified item from the array.",
      "clear (Function): Clears the entire array, making it empty.",
      "filter (Function): Filters the array based on a provided callback function.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usearray-rxj3p5?file=%2Fsrc%2FTest.jsx%3A8%2C11",
    id: 3,
    codes: [
      {
        name: "useArray",
        code: `const useArray = (initArray) => {
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
    ],
  },

  {
    name: "useCloseElement",
    explanation: [
      `The useCloseElement custom hook manages the state of an element's visibility based
      on document click events, with options to specify elements that should not trigger the element to close.`,
      `The use case of this hook is in creating custom dropdown menus or modal components where clicking outside
      the element should close it. This hook simplifies the implementation of such behavior by encapsulating
      the logic to handle document click events and manage the element's visibility state, enhancing user
      interaction and providing a more intuitive user experience.`,
    ],
    inputs: [
      "toggleEleRef (React ref): Ref for the toggle element that triggers the close behavior.",
      "switcherEleRef (React ref): Ref for the switcher element that controls the visibility of the element.",
      "exceptElementRef (React ref): Ref for an optional element that should not trigger the close behavior.",
    ],
    outputs: [
      "isElementClose (Boolean): Represents the current state of whether the element should be closed.",
      "setIsElementClose (Function): Function to manually set the state of isElementClose.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usecloseelement-z49szj?file=%2Fsrc%2FTest.jsx%3A2%2C49",
    id: 4,
    codes: [
      {
        name: "useCloseElement",
        code: `const useCloseElement = (toggleEleRef, switcherEleRef, exceptElementRef) => {
  const [isElementClose, setIsElementClose] = useState(false);

  function handleDocumentClick(e) {
    if (!toggleEleRef.current || !switcherEleRef.current) return;

    const target = e.target;
    const isSwitcherEle = target === switcherEleRef?.current;
    const isExceptEle = target === exceptElementRef?.current;
    const isInsideToggle = isParentOfElement(target, toggleEleRef?.current);
    const shouldCloseElement =
      (!isSwitcherEle && !isInsideToggle) || isExceptEle;

    if (shouldCloseElement) setIsElementClose(false);
    else if (isSwitcherEle) setIsElementClose((prevState) => !prevState);
  }

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);

    return () => window.removeEventListener("click", handleDocumentClick);
  }, [toggleEleRef, switcherEleRef, exceptElementRef]);

  return [isElementClose, setIsElementClose];
};

export default useCloseElement;`,
      },
      {
        name: "isParentOfElement",
        code: `const isParentOfElement = (element, requiredEle) => {
  let parentElement = element.parentElement;

  while (
    parentElement &&
    requiredEle !== parentElement &&
    requiredEle !== element
  ) {
    parentElement = parentElement.parentElement;
  }

  return !!parentElement;
};`,
      },
    ],
  },

  {
    name: "useUpdateEffect",
    explanation: [
      `The useUpdateEffect hook is designed to be similar to the useEffect hook in React but with a key difference:
      it skips its initial execution and runs the effect only on subsequent re-renders, excluding the initial render.
      This can be useful when you want to perform certain actions or side effects only after the initial render has
      occurred and avoid unnecessary execution during component mounting.`,
    ],
    inputs: [
      "callback (Function): The function to run when the effect is triggered on update.",
      "dependencies (Array): An array of dependencies to watch for changes and trigger the effect accordingly.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/useupdateeffect-jsx-j7pkck?file=%2Fsrc%2FTest.jsx%3A5%2C41",
    id: 5,
    codes: [
      {
        name: "useUpdateEffect",
        code: `const useUpdateEffect = (callback, dependencies) => {
  const mount = useRef(false);

  useEffect(() => {
    if (!mount.current) {
      mount.current = true;
      return;
    }

    return callback;
  }, dependencies);
};

export default useUpdateEffect;`,
      },
    ],
  },

  {
    name: "useEventListener",
    explanation: [
      `The useEventListener custom hook allows for easy attachment and removal of event listeners to
      a specified DOM element within a React component. This hook utilizes the useEffect hook from
      React to manage the lifecycle of the event listener. When the component mounts, it adds the
      event listener to the specified DOM element, and when the component unmounts, it removes
      the event listener to prevent memory leaks.`,

      `The benefit of using the useEventListener hook is that it encapsulates the logic for attaching
      and removing event listeners within a reusable hook, promoting code reusability and readability.
      It abstracts away the complexity of managing event listeners directly within components, resulting
      in cleaner and more maintainable code.`,
    ],
    inputs: [
      "element (DOM element): The DOM element to which the event listener will be attached.",
      'eventName (String): The name of the event (e.g., "click", "change").',
      "callback (Function): The callback function to be executed when the event occurs.",
      "dependencies (Array): An optional array of dependencies that triggers the effect to re-run when changed.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/useeventlistener-9tcp7n?file=%2Fsrc%2FTest.jsx%3A3%2C1",
    id: 6,
    codes: [
      {
        name: "useEventListener",
        code: `import { useEffect } from "react";

const useEventListener = (
  ref,
  eventName,
  callback,
  dependencies = [ref, eventName, callback]
) => {
  useEffect(() => {
    const element = ref.current ? ref.current : ref;

    element?.addEventListener(eventName, callback);

    return () => element?.removeEventListener(eventName, callback);
  }, dependencies);
};

export default useEventListener;`,
      },
    ],
  },

  {
    name: "useGetParams",
    explanation: [
      `The useGetParams custom hook efficiently manages URL query parameters within React components.
      By encapsulating parameter extraction logic, it promotes code reuse and maintainability.
      Its automatic updates ensure components reflect the latest URL parameters, simplifying
      integration and offering a centralized solution for parameter management.`,
      `A common use case for the useGetParams hook is in scenarios where a React application needs
      to dynamically adjust its behavior or content based on URL query parameters. For example,
      in a multi-step form where each step is represented by a different URL parameter, this hoo
      can be used to extract the current step from the URL and display the corresponding form
      component. This allows for a more seamless user experience as users can navigate between
      form steps using browser navigation buttons while preserving their progress.`,
    ],
    outputs: [
      "params (Object): An object containing all the extracted query parameters.",
    ],
    id: 8,
    codes: [
      {
        name: "useGetParams",
        code: `const useGetParams = () => {
  const [params, setParams] = useState({});

  useEffect(() => {
    const updateParams = () => {
      const url = window.location.href;
      const paramsStr = url.split("?")[1];
      const paramsArray = paramsStr ? paramsStr.split("&") : [];
      let allParams = {};

      paramsArray.forEach((param) => {
        const [paramKey, paramValue] = param.split("=");
        allParams = { ...allParams, [paramKey]: paramValue };
      });

      setParams(allParams);
    };

    updateParams();

    window.addEventListener("popstate", updateParams);

    return () => window.removeEventListener("popstate", updateParams);
  }, []);

  return params;
};

export default useGetParams;`,
      },
    ],
  },

  {
    name: "useGetResizeWindow",
    explanation: [
      `The useGetResizeWindow hook tracks the window resize event and returns an object containing
      the current width and height of the viewport's browser window in pixels.`,
    ],
    outputs: [
      "sizes (Object): An object containing the current width and height of the viewport's browser window.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usegetresizewindow-nj9n9p?file=%2Fsrc%2FTest.jsx%3A8%2C10",
    id: 9,
    codes: [
      {
        name: "useGetResizeWindow",
        code: `import { useEffect, useState } from "react";

const useGetResizeWindow = () => {
  const [sizes, setSizes] = useState({
    width: innerWidth,
    height: innerHeight,
  });
  let timerId;

  useEffect(() => {
    function handleResize() {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        setSizes({
          width: innerWidth,
          height: innerHeight,
        });
      }, 300);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return sizes;
};

export default useGetResizeWindow;`,
      },
    ],
  },

  {
    name: "useKeyPress",
    explanation: [
      `The useKeyPress hook is a custom React hook designed to track keypress events within a React application.
      It encapsulates the logic necessary to monitor keypress events and provides convenient access to information
      about the key pressed, including metadata such as whether modifier keys like Alt, Ctrl, or Shift were held down
      during the keypress, the target element, the timestamp of the event, and the keycode. This enhances the
      development process by simplifying key press event handling, promoting code reusability, and improving the
      overall user experience through enhanced keyboard interaction.`,
    ],
    outputs: [
      "key (String): Represents the key code of the pressed key.",
      "pressInfo (Object): An object containing information about the keypress event.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usekeypress-dzgxxj?file=%2Fsrc%2FTest.jsx%3A8%2C45",
    id: 10,
    codes: [
      {
        name: "useKeyPress",
        code: `import { useEffect, useState } from "react";

const useKeyPress = () => {
  const [pressInfo, setPressInfo] = useState({});
  const [key, setKey] = useState("");

  function handleKeyPress(e) {
    const { altKey, ctrlKey, shiftKey, target, timeStamp, keyCode } = e;
    const extractedInfo = { altKey, ctrlKey, shiftKey, target, timeStamp, keyCode };
    setPressInfo(extractedInfo);
    setKey(e.code);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return [key, pressInfo];
};

export default useKeyPress;`,
      },
    ],
  },

  {
    name: "useLocalStorage",
    explanation: [
      `The useLocalStorage hook is a custom React hook designed to simplify the process of storing
      and retrieving data in the browser's local storage. It takes two parameters: keyName, which
      represents the key under which the data will be stored in the local storage, and initialData,
      which provides a default value for the stored data if it doesn't exist yet.`,
      `The hook utilizes the useState hook from React to manage the state of the
      stored data within the component. Upon initialization, it checks if there is
      already data stored in the local storage under the specified key. If data is found,
      it parses it from JSON format and sets it as the initial state; otherwise, it uses the provided initialData.`,
      `The primary use case for the useLocalStorage hook is when you need to persist data across page
      refreshes or even when the user closes and reopens the browser. This is particularly useful for storing
      user preferences, authentication tokens, or any other data that needs to be retained between sessions.`,
    ],
    inputs: [
      "keyName (String): The name under which the data will be stored in the local storage.",
      "initialData (Any): The initial data to be stored if no data exists in the local storage under the given key name.",
    ],
    outputs: [
      "data (Any): The data retrieved from the local storage.",
      "setDataFun (Function): A function to update the data in the local storage.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/uselocalstorage-6hy7w2?file=%2Fsrc%2FTest.jsx%3A4%2C33",
    id: 11,
    codes: [
      {
        name: "useLocalStorage",
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
    ],
  },

  {
    name: "useOnlineStatus",
    explanation: [
      `The useOnlineStatus hook is a custom React hook designed to monitor and provide the online/offline
      status of the user's device, The primary use case for the useOnlineStatus hook is to enable developers
      to build components that react to changes in the online/offline status of the user's device. `,
    ],
    outputs: [
      "isOnline (Boolean): True if the device is online, false if it is offline.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/useonscreen-zkvlhy?file=%2Fsrc%2FTest.jsx%3A7%2C28",
    id: 12,
    codes: [
      {
        name: "useOnlineStatus",
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
    ],
  },

  {
    name: "useOnScreen",
    explanation: [
      `The useOnScreen hook, leveraging the Intersection Observer API, efficiently detects whether a specified
      DOM element is visible within the viewport. This capability is invaluable for implementing features like
      lazy loading, infinite scrolling, animations, and analytics tracking, thereby enhancing
      performance, simplifying implementation, ensuring cross-browser compatibility,
      and improving the overall user experience in React applications.`,
    ],
    inputs: [
      "ref (React ref): Ref of the DOM element to be observed for visibility.",
      "options (Object): Optional object with configuration options for the IntersectionObserver.",
      "rootMargin (String): The margin around the root (viewport) to consider when triggering visibility changes.",
      "threshold (Number or Array of Numbers): A single number or an array of numbers between 0 and 1 indicating at what percentage of the target's visibility the observer's callback should be executed.",
    ],
    outputs: [
      "isVisible (Boolean): True if the observed element is visible, false otherwise.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/useonscreen-zkvlhy?file=%2Fsrc%2FuseOnScreen.jsx%3A5%2C1",
    id: 13,
    codes: [
      {
        name: "useOnScreen",
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
    ],
  },

  {
    name: "usePageBottom",
    explanation: [
      `
      The usePageBottom custom hook detects when a user has scrolled to the bottom of a page,
      with an optional margin, by tracking the scroll position and window dimensions.`,

      `A common use case is in implementing infinite scrolling, where new content is loaded
      dynamically as the user reaches the bottom of the page, optimizing performance by
      fetching data only when needed. This hook simplifies implementation by encapsulating
      scroll position logic and provides a responsive user experience by seamlessly
      integrating new content during scrolling.`,
    ],
    inputs: [
      "marginBottom (Number): Optional margin from the bottom of the page to consider when determining if scrolled to the bottom. Default is 1.",
    ],
    outputs: [
      "isScrolledToBottom (Boolean): True if the page is scrolled to the bottom, false otherwise.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usepagination-jsx-jx9p99?file=%2Fsrc%2FTest.jsx%3A2%2C1",
    id: 14,
    codes: [
      {
        name: "usePageBottom",
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
    ],
  },

  {
    name: "useRandomNumber",
    explanation: [
      `The useRandomNumber hook is a custom React hook designed to generate and manage random numbers
      within a specified range. It encapsulates the logic for generating random numbers and provides
      functionality to change the generated number within the specified range.`,
    ],
    inputs: [
      "min (Number): The minimum value of the random number range.",
      "max (Number): The maximum value of the random number range.",
    ],
    outputs: [
      "randomNumber (Number): The current random number within the specified range.",
      "changeRandomNumber (Function): Function to change the random number within the specified range.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/hopeful-maria-cfhdkv?file=%2Fsrc%2FTest.jsx",
    id: 16,
    codes: [
      {
        name: "useRandomNumber",
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

export default useRandomNumber;`,
      },
      {
        name: "generateRandomNumber",
        code: `function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}`,
      },
    ],
  },

  {
    name: "useMouseEffect",
    explanation: [
      `The useMouseEffect hook applies effects related to mouse movements on a specified element.,
      It allows adding a custom class when the mouse is active, positioning the element based on mouse
      coordinates, and toggling a class on specified elements when the mouse hovers over them.`,
      `A common use case is in creating interactive UI elements, such as tooltips or interactive widgets,
      where visual feedback enhances user engagement. This hook simplifies the implementation of such
      effects by encapsulating mouse event handling logic, enabling developers to easily integrate dynamic
      visual feedback into their React components, thereby improving user experience and interactivity.`,
    ],
    inputs: [
      "mouseEffectRef (React ref): Ref for the element on which mouse effects will be applied.",
      "activeClass (String, default: 'active'): Class to be added when the mouse is active.",
      "hoverElements (Array, default: []): Array of tag names on which hover effects should be applied.",
      "activeTime (Number, default: 500): Time in milliseconds before applying the activeClass.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usemouseeffect-t4mzrz?file=%2Fsrc%2FTest.jsx%3A4%2C33",
    id: 17,
    codes: [
      {
        name: "useMouseEffect",
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
    ],
  },

  {
    name: "useFunctionOnKey",
    explanation: [
      `The useFunctionOnKey custom hook triggers a callback function when specific keys are pressed, with optional
      configurations for debounce, disabling on main keys, and disabling on focus elements.`,
      `A common use case is in enhancing user interaction, such as implementing keyboard shortcuts in web applications,
      improving accessibility by allowing users to perform actions efficiently without relying solely on mouse clicks.
      This hook simplifies keyboard event handling and provides flexibility through configurable options,
      contributing to a smoother and more responsive user experience.`,
    ],
    inputs: [
      "callback (Function): The function to be called when the specified keys are pressed.",
      "keysNames (Array): An array of strings representing the names of the keys to listen for.",
      "delay (Number): Optional. The delay (in milliseconds) to debounce the key press events. Default is 200 milliseconds.",
      "disableMainKeys (Boolean): Flag to disable the callback when one of the main keys (Shift, Alt, Ctrl) is pressed. Default is false.",
      "disableOnFocus (Boolean): Flag to disable the callback when focus is on an input or textarea element. Default is false.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/determined-khayyam-mfpznn?file=%2Fsrc%2FTest.jsx%3A8%2C22",
    id: 18,
    codes: [
      {
        name: "useFunctionOnKey",
        code: `import useDebounce from "./useDebounce";
import useKeyPress from "./useKeyPress";

const useFunctionOnKey = (
  callback,
  keysNames,
  delay = 200,
  disableMainKeys = false,
  disableOnFocus = false
) => {
  const [pressedKey, pressInfo] = useKeyPress();
  useDebounce(() => executeOnClick(), delay, [pressedKey, pressInfo]);

  function executeOnClick() {
    const { shiftKey, altKey, ctrlKey } = pressInfo;
    const isOneOfMainKeysPressed = shiftKey || altKey || ctrlKey;
    const focusElement = document.activeElement?.tagName;
    const isFocusOnInput = /^(input|textarea)$/i.test(focusElement);
    const shouldRejectExecution =
      (disableMainKeys || disableOnFocus) &&
      (isOneOfMainKeysPressed || isFocusOnInput);

    if (shouldRejectExecution) return;

    if (keysNames.includes(pressedKey)) callback();
  }
};

export default useFunctionOnKey;`,
      },
      {
        name: "useKeyPress",
        code: `import { useEffect, useState } from "react";

const useKeyPress = () => {
  const [pressInfo, setPressInfo] = useState({});
  const [key, setKey] = useState("");

  function handleKeyPress(e) {
    const { altKey, ctrlKey, shiftKey, target, timeStamp, keyCode } = e;
    const extractedInfo = { altKey, ctrlKey, shiftKey, target, timeStamp, keyCode };
    setPressInfo(extractedInfo);
    setKey(e.code);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return [key, pressInfo];
};

export default useKeyPress;`
      },
      {
        name: "useDebounce",
        code: `import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(callback, delay = 500, dependencies = []) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}`
      },
      {
        name: "useTimeout",
        code: `import { useCallback, useEffect, useRef } from "react";

function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

export default useTimeout;`
      },
    ],
  },

  {
    name: "useFormData",
    explanation: [
      `The useFormData hook facilitates managing form data by providing functions to handle form changes and submission.
      It enables tracking form values and executing a callback function upon form submission.`,
    ],
    inputs: [
      "initialValues (Object): An object containing the initial values for the form fields.",
      "onSubmit (Function): A function to be called when the form is submitted. It receives the current form values as its argument.",
    ],
    outputs: [
      "values (Object): Represents the current values of the form fields.",
      "handleChange (Function): A function to handle changes in form fields. It updates the corresponding value in the form data.",
      "handleSubmit (Function): A function to handle form submission. It prevents the default form submission behavior and invokes the onSubmit callback with the current form values.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/useformdata-vcdd4w?file=%2Fsrc%2FTest.jsx%3A2%2C1",
    id: 19,
    codes: [
      {
        name: "useFormData",
        code: `import { useState } from "react";

const useFormData = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
};

export default useFormData;`,
      },
    ],
  },

  {
    name: "usePagination",
    explanation: [
      `The usePagination hook manages pagination state for a list of items. It calculates the current page,
      total pages, start index, and end index based on the total number of items and items per page.
      It provides functions to navigate between pages: nextPage, prevPage, and goToPage.`,
    ],
    inputs: [
      "totalItems (Number): The total number of items.",
      "itemsPerPage (Number): The number of items to display per page.",
      "pageNumber (Number): The initial page number. Default is 1.",
    ],
    outputs: [
      "currentPage (Number): Represents the current page.",
      "totalPages (Number): Represents the total number of pages.",
      "nextPage (Function): Advances to the next page if available.",
      "prevPage (Function): Goes to the previous page if available.",
      "goToPage (Function): Navigates to the specified page.",
      "startIndex (Number): Represents the start index of items on the current page.",
      "endIndex (Number): Represents the end index of items on the current page.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usepagination-jsx-jx9p99?file=%2Fsrc%2FTest.jsx%3A1%2C28",
    id: 20,
    codes: [
      {
        name: "usePagination",
        code: `import { useState } from "react";

const usePagination = (totalItems, itemsPerPage, pageNumber = 1) => {
  const [currentPage, setCurrentPage] = useState(pageNumber);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function nextPage() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }

  function prevPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  function goToPage(page) {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);

  const paginationInfo = {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    startIndex,
    endIndex,
  };

  return paginationInfo;
};

export default usePagination;`,
      },
    ],
  },

  {
    name: "useUndo",
    explanation: [
      `The useUndo hook provides undo functionality for managing state changes.
      It allows reverting to the previous state and saving the current state for future undo actions.`,
    ],
    inputs: ["initialValue (Any): The initial value for the state."],
    outputs: [
      "value (Any): Represents the current state.",
      "set (Function): Sets the current state to a new value.",
      "undo (Function): Reverts the current state to the previous value.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/useundo-jsx-x8kq6k?file=%2Fsrc%2FTest.jsx%3A9%2C39",
    id: 21,
    codes: [
      {
        name: "useUndo",
        code: `import { useState } from "react";

const useUndo = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [undoValue, setUndoValue] = useState(null);

  const undo = () => {
    setValue(undoValue);
  };

  const set = (newValue) => {
    setUndoValue(value);
    setValue(newValue);
  };

  return [value, set, undo];
};

export default useUndo;`,
      },
    ],
  },

  {
    name: "useTimeout",
    explanation: [
      `The useTimeout hook is a custom React hook designed to manage timeouts in React components.
      It allows developers to execute a callback function after a specified delay, with options
      to clear or reset the timeout as needed. `,
      `One common use case for the useTimeout hook is implementing time-based behavior in React
      components. For example, developers can use this hook to delay the execution of certain
      actions or UI updates, such as displaying a notification after a short delay or triggering
      an animation after a user interaction. By encapsulating timeout logic within a reusable hook,
      developers can easily incorporate time-based functionality into their components without
      dealing with the complexities of managing timeouts directly.`,
    ],
    inputs: [
      "callback (Function): The function to be executed after the timeout.",
      "delay (Number): The delay time in milliseconds before executing the callback.",
    ],
    outputs: [
      "reset (Function): Clears the current timeout and sets a new one.",
      "clear (Function): Clears the current timeout.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usetimeout-jsx-mw5z49?file=%2Fsrc%2FTest.jsx%3A7%2C49",
    id: 22,
    codes: [
      {
        name: "useTimeout",
        code: `import { useCallback, useEffect, useRef } from "react";

function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

export default useTimeout;`,
      },
    ],
  },

  {
    name: "useDebounce",
    explanation: [
      `The useDebounce hook enables you to debounce a callback function, which means delaying its execution until
      a certain amount of time has passed since the last invocation. This is particularly useful in scenarios where
      you want to optimize performance by reducing the frequency of expensive computations or network requests.`,
    ],
    inputs: [
      "callback (Function): The function you want to debounce.",
      "delay (Number): The delay in milliseconds for debouncing the callback.",
      "dependencies (Array): An optional array of dependencies for useEffect.",
    ],
    liveCode:
      "https://codesandbox.io/p/sandbox/usedebounce-jsx-y8nvxj?file=%2Fsrc%2FTest.jsx%3A3%2C1",
    id: 24,
    codes: [
      {
        name: "useDebounce",
        code: `import { useEffect } from "react";
import useTimeout from "./useTimeout";

function useDebounce(callback, delay = 500, dependencies = []) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}

export default useDebounce;`,
      },
      {
        name: "useTimeout",
        code: `import { useCallback, useEffect, useRef } from "react";

function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

export default useTimeout;`,
      },
    ],
  },

  {
    name: "useDocumentTitle",
    explanation: [
      `The useDocumentTitle hook allows you to dynamically update the title of the document in
      a React component. It sets the document title to a specified value when the component mounts
      and restores the original title when the component unmounts. This functionality is useful for
      providing meaningful titles to pages or components within a single-page application.`,
    ],
    inputs: ["title (String): The new title to be set for the document."],
    liveCode:
      "https://codesandbox.io/p/sandbox/usedocumenttitle-jsx-d887rj?file=%2Fsrc%2FTest.jsx%3A10%2C1",
    id: 25,
    codes: [
      {
        name: "useDocumentTitle",
        code: `import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;

    return () => (document.title = originalTitle);
  }, [title]);
};

export default useDocumentTitle;`,
      },
    ],
  },
];

const sortedDataByCodeLength = originalHooksData.sort(
  (a, b) => a.codes[0].code.length - b.codes[0].code.length
);

export const hooksData = sortedDataByCodeLength;
