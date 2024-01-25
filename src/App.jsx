import Footer from "./Components/Footer/Footer";
import Home from "./Components/home/Home";
import GlobalOverlay from "./Components/Shared/GlobalOverlay";
import { useGlobalContext } from "./Context/GlobalContext";
import ScrollBottomTop from "./Components/Shared/Features/ScrollBottomTop";
import FullScreenMode from "./Components/Shared/Features/FullScreenMode";
import FocusMode from "./Components/Shared/Features/FocusMode";

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
