import HooksLayout from "./Components/hooks/HooksLayout";
import SideBar from "./Components/sidebar/SideBar";
import GlobalContextProvider from "./Context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <SideBar />
        <HooksLayout />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
