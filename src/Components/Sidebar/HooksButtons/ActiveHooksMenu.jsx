import { useGlobalContext } from "src/Context/GlobalContext";
import s from "./ActiveHooksMenu.module.scss";
import HooksButtons from "./HooksButtons";

const ActiveHooksMenu = () => {
  const { isNotFoundPageShown } = useGlobalContext();

  if (isNotFoundPageShown) return null;

  return (
    <ul className={s.hooksMenu}>
      <HooksButtons />
    </ul>
  );
};

export default ActiveHooksMenu;
