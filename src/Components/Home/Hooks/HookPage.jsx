import { useSearchParams } from "react-router-dom";
import { useHooksContext } from "src/Context/HooksContext";
import { hooksData } from "src/Data/hooksData";
import { getPageData } from "src/Functions/projectFunctions";
import Hook from "./CodeBlock/Hook";

const HookPage = () => {
  const [params] = useSearchParams();
  const pageId = parseInt(params.get("page")) || 1;
  const { hooksPerPage } = useHooksContext();
  const { pageData, indexes } = getPageData(hooksData, pageId, hooksPerPage);

  return pageData?.map((hookData, i) => (
    <Hook key={hookData.id} hookData={{ ...hookData, index: indexes[i] }} />
  ));
};

export default HookPage;
