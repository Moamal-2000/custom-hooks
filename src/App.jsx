import Home from "./Components/home/Home";
import GlobalContextProvider from "./Context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}

export default App;
