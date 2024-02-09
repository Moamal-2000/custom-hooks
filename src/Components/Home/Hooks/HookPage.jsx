import { useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../../../Context/GlobalContext";
import { hooksData } from "../../../Data/hooksData";
import { getPageData } from "../../../Functions/projectFunctions";
import Hook from "./Hook";

const HookPage = () => {
  const [params] = useSearchParams();
  const pageId = parseInt(params.get("page")) || 1;
  const { hooksPerPage } = useGlobalContext();
  const { pageData, indexes } = getPageData(hooksData, pageId, hooksPerPage);

  return pageData?.map((hookData, i) => (
    <Hook key={hookData.id} hookData={{ ...hookData, index: indexes[i] }} />
  ));
};

export default HookPage;
