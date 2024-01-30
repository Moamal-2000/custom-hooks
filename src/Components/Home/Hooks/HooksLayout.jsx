import { hooksData } from "../../../Data/hooksData";
import Hook from "./Hook";

const HooksLayout = () => {
  return (
    <section className="hooks">
      {hooksData?.map(
        (hookData) => hookData && <Hook key={hookData.id} hookData={hookData} />
      )}
    </section>
  );
};
export default HooksLayout;
