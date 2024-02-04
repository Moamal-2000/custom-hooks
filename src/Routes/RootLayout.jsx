import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import FocusMode from "../Components/Shared/Features/FocusMode";
import FullScreenMode from "../Components/Shared/Features/FullScreenMode";
import MusicTime from "../Components/Shared/Features/MusicTime";
import ScrollBottomTop from "../Components/Shared/Features/ScrollBottomTop";
import GlobalOverlay from "../Components/Shared/GlobalOverlay";
import HooksNavigator from "../Components/Shared/MiniComponents/HooksNavigator";
import { useGlobalContext } from "../Context/GlobalContext";
import SideBar from "../Components/Sidebar/SideBar";
import SkipContentLink from "../Components/Shared/MiniComponents/SkipContentLink";
import DarkMode from "../Components/Shared/Features/DarkMode";

const RootLayout = () => {
  const { isFocusModeActiveLocal } = useGlobalContext();

  return (
    <>
      <SkipContentLink scrollTo="main-content" />
      <SideBar />
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
      <DarkMode />
      <GlobalOverlay />
    </>
  );
};

export default RootLayout;
