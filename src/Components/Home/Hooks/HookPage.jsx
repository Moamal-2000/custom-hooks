import { useSearchParams } from "react-router-dom";
import { hooksData } from "../../../Data/hooksData";
import Hook from "./Hook";

const HookPage = () => {
  const [params] = useSearchParams()
  const pageId = parseInt(params.get("page")) || 1

  const pageHooksData = hooksData.filter((hookData) => hookData?.page === pageId);

  return pageHooksData?.map(
    (hookData) => hookData && <Hook key={hookData.id} hookData={hookData} />
  );
};

export default HookPage;
