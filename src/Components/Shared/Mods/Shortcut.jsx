import styles from "./Shortcut.module.scss"

const Shortcut = ({children, keys}) => {
  return (
    <div className={styles.shortcut}>
      <p>{children}</p>

      <div className={styles.keys}>
        {keys.map(key => (
          <button type="button">{key}</button>
        ))}
      </div>
    </div>
  )
}
export default Shortcut