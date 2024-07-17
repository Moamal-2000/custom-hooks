import { useSearchParams } from "react-router-dom";
import { hooksData } from "src/Data/hooksData";
import { NUMBER_OF_PAGES } from "src/Data/variables";
import { getPageData } from "src/Functions/projectFunctions";
import Hook from "./CodeBlock/Hook";

const HookPage = () => {
  const [params] = useSearchParams();
  const pageId = parseInt(params.get("page")) || 1;
  const { pageData, indexes } = getPageData(hooksData, pageId, NUMBER_OF_PAGES);

  return pageData?.map((hookData, i) => (
    <Hook key={hookData.id} hookData={{ ...hookData, index: indexes[i] }} />
  ));
};

export default HookPage;
