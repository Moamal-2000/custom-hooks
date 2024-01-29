const useGetParams = () => {
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

export default useGetParams;
