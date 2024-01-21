import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import GlobalContextProvider from "./Context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Home />

      <div className="container">
        <Footer />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
