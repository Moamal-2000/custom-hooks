import HooksLayout from "./Components/hooks/HooksLayout";
import SideBar from "./Components/sidebar/SideBar";

function App() {
  return (
    <>
      <div className="container">
        <SideBar />
        <HooksLayout />
      </div>
    </>
  );
}

export default App;
