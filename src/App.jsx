import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import GlobalOverlay from "./Components/shared/GlobalOverlay";
import ScrollBottomTop from "./Components/shared/ScrollBottomTop";
import GlobalContextProvider from "./Context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Home />

      <div className="container">
        <Footer />
      </div>

      <ScrollBottomTop />
      <GlobalOverlay />
    </GlobalContextProvider>
  );
}

export default App;
