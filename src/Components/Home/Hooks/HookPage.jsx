import { useParams } from "react-router-dom";
import { hooksData } from "../../../Data/hooksData";
import Hook from "./Hook";

const HookPage = () => {
  const { id } = useParams();
  const pageHooksData = hooksData.filter((hookData) => hookData?.page === +id);

  return pageHooksData?.map(
    (hookData) => hookData && <Hook key={hookData.id} hookData={hookData} />
  );
};
export default HookPage;
