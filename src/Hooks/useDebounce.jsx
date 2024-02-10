const useDebounce = (delay) => {
  let timerId;

  function debounceFun(callback) {
    clearTimeout(timerId)

    timerId = setTimeout(() => callback(), delay);
  }

  return { debounceFun };
};

export default useDebounce;
