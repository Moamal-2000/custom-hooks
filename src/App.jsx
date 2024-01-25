import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import FocusMode from "./Components/shared/FocusMode";
import FullScreenMode from "./Components/shared/FullScreenMode";
import GlobalOverlay from "./Components/shared/GlobalOverlay";
import ScrollBottomTop from "./Components/shared/ScrollBottomTop";
import { useGlobalContext } from "./Context/GlobalContext";

function App() {
  const { isFocusModeActive, toggleIsFocusModeActive } = useGlobalContext();

  return (
    <>
      <Home />

      <div className="container">
        <Footer />
      </div>

      {!isFocusModeActive && (
        <>
          <ScrollBottomTop />
          <FullScreenMode />
        </>
      )}

      <FocusMode />
      <GlobalOverlay />
    </>
  );
}

export default App;
