import { hooksData } from "../../Data/hooksData";
import Hook from "./Hook";

const HooksLayout = () => {
  return (
    <div>
      {hooksData.map((hookData) => (
        <Hook key={hookData.id} hookData={hookData} />
      ))}
    </div>
  );
};
export default HooksLayout;
