import FocusMode from "./Components/Shared/Features/FocusMode";
import FullScreenMode from "./Components/Shared/Features/FullScreenMode";
import ScrollBottomTop from "./Components/Shared/Features/ScrollBottomTop";
import GlobalOverlay from "./Components/Shared/GlobalOverlay";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import { useGlobalContext } from "./Context/GlobalContext";

function App() {
  const { isFocusModeActiveLocal } = useGlobalContext();

  return (
    <>
      <Home />

      <div className="container">
        <Footer />
      </div>

      {!isFocusModeActiveLocal && (
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
