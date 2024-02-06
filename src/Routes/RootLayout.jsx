import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import DarkMode from "../Components/Shared/Mods/DarkMode";
import FocusMode from "../Components/Shared/Mods/FocusMode";
import FullScreenMode from "../Components/Shared/Mods/FullScreenMode";
import MusicTime from "../Components/Shared/Mods/MusicTime";
import ScrollBottomTop from "../Components/Shared/Mods/ScrollBottomTop";
import GlobalOverlay from "../Components/Shared/GlobalOverlay";
import HooksNavigator from "../Components/Shared/MiniComponents/HooksNavigator";
import SkipContentLink from "../Components/Shared/MiniComponents/SkipContentLink";
import SideBar from "../Components/Sidebar/SideBar";
import { useGlobalContext } from "../Context/GlobalContext";

const RootLayout = () => {
  const { isFocusModeActiveLocal, isNotFoundPageShown } = useGlobalContext();

  return (
    <>
      <SkipContentLink scrollTo="main-content" />
      <SideBar />
      <Outlet />
      {!isNotFoundPageShown && <HooksNavigator />}

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
