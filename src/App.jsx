import Introduction from "./Components/Introduction/Introduction";
import HooksLayout from "./Components/hooks/HooksLayout";
import SideBar from "./Components/sidebar/SideBar";
import GlobalContextProvider from "./Context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <SideBar />
        <Introduction />
        <HooksLayout />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
