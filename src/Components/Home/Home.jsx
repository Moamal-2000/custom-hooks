import styles from "./Home.module.scss";
import Introduction from "./Introduction/Introduction";
import HooksLayout from "./Hooks/HooksLayout";
import SideBar from "./Sidebar/SideBar";

const Home = () => {
  return (
    <div className={styles.home}>
      <SideBar />

      <div className="container">
        <main className={styles.content}>
          <Introduction />
          <HooksLayout />
        </main>
      </div>
    </div>
  );
};
export default Home;
