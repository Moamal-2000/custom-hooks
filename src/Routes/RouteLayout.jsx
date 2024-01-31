import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import FocusMode from "../Components/Shared/Features/FocusMode";
import FullScreenMode from "../Components/Shared/Features/FullScreenMode";
import ScrollBottomTop from "../Components/Shared/Features/ScrollBottomTop";
import GlobalOverlay from "../Components/Shared/GlobalOverlay";
import { useGlobalContext } from "../Context/GlobalContext";
import HooksNavigator from "../Components/Shared/MiniComponents/HooksNavigator";
import MusicTime from "../Components/Shared/Features/MusicTime";

const RouteLayout = () => {
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
export default RouteLayout;
