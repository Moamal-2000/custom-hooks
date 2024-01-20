import Introduction from "./Introduction/Introduction";
import HooksLayout from "./hooks/HooksLayout";
import SideBar from "./sidebar/SideBar";
import styles from "./Home.module.scss"

const Home = () => {
  return (
    <main className={styles.home}>
      <div className="container">
        <SideBar />
        <Introduction />
        <HooksLayout />
      </div>
    </main>
  );
};
export default Home;
