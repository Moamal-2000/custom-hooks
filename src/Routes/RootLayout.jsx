import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import FocusMode from "../Components/Shared/Features/FocusMode";
import FullScreenMode from "../Components/Shared/Features/FullScreenMode";
import MusicTime from "../Components/Shared/Features/MusicTime";
import ScrollBottomTop from "../Components/Shared/Features/ScrollBottomTop";
import GlobalOverlay from "../Components/Shared/GlobalOverlay";
import HooksNavigator from "../Components/Shared/MiniComponents/HooksNavigator";
import { useGlobalContext } from "../Context/GlobalContext";

const RootLayout = () => {
  const { isFocusModeActiveLocal } = useGlobalContext();

  return (
    <>
      <Outlet />
      <HooksNavigator />

      <div className="container">
        <Footer />
      </div>

      {!isFocusModeActiveLocal && (
        <>
          <ScrollBottomTop />
          <FullScreenMode />
        </>
      )}

      <MusicTime />
      <FocusMode />
      <GlobalOverlay />
    </>
  );
};

export default RootLayout;
