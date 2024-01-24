import { hooksData } from "../Data/hooksData";
import { saveInRAR } from "./helper";

export function handleDownloadAllHooks() {
  const files = [];

  hooksData.forEach((hookData) =>
    files.push({
      name: `${hookData.name}.jsx`,
      content: hookData.code,
    })
  );

  saveInRAR(files);
}
