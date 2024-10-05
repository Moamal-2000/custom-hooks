import { useMemo } from "react";
import { iconsData } from "src/Data/iconsData";

const SvgIcon = ({ name }) => {
  const iconData = useMemo(
    () => iconsData.find((iconData) => iconData?.name === name),
    [name]
  );

  if (!iconData) {
    console.warn(`Icon with name "${name}" not found.`);
    return null;
  }

  return iconData?.icon;
};

export default SvgIcon;
