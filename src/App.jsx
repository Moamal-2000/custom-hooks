import ScrollBottomTop from "./Components/Shared/Features/ScrollBottomTop";
import FullScreenMode from "./Components/Shared/Features/FullScreenMode";
import FocusMode from "./Components/Shared/Features/FocusMode";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import GlobalOverlay from "./Components/shared/GlobalOverlay";
import { useGlobalContext } from "./Context/GlobalContext";

function App() {
  const { isFocusModeActive } = useGlobalContext();

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
