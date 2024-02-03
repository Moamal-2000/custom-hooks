import { useEffect, useState } from "react";

const useFilteredObjects = (array, searchValue, key) => {
  const [filteredArr, setFilteredArr] = useState(array);

  useEffect(() => {
    const filteredData = array.filter((obj) => {
      return obj[key].toLowerCase().startsWith(searchValue.toLowerCase());
    });

    setFilteredArr(filteredData);
  }, [searchValue]);

  return [filteredArr, setFilteredArr];
};

export default useFilteredObjects;
