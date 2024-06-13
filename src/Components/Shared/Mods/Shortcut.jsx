import s from "./Shortcut.module.scss";

const Shortcut = ({ children, keys }) => {
  return (
    <div className={s.shortcut}>
      <p>{children}</p>

      <div className={s.keys}>
        {keys.map((key, i) => (
          <button key={i} type="button">
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Shortcut;
