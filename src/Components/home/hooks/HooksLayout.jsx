import { hooksData } from "../../../Data/hooksData";
import Hook from "./Hook";

const HooksLayout = () => {
  return (
    <div className="hooks">
      {hooksData?.map(
        (hookData) => hookData && <Hook key={hookData.id} hookData={hookData} />
      )}
    </div>
  );
};
export default HooksLayout;
