import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import FullScreenMode from "./Components/shared/FullScreenMode";
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
      <FullScreenMode />
      <GlobalOverlay />
    </GlobalContextProvider>
  );
}

export default App;
