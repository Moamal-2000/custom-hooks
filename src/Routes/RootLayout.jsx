import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import GlobalOverlay from "../Components/Shared/GlobalOverlay";
import HooksNavigator from "../Components/Shared/MiniComponents/HooksNavigator";
import SkipContentLink from "../Components/Shared/MiniComponents/SkipContentLink";
import SideBar from "../Components/Sidebar/SideBar";
import { useGlobalContext } from "../Context/GlobalContext";
import Mods from "../Components/Shared/Mods/Mods";
import ShortcutsMenu from "../Components/Shared/Mods/ShortcutsMenu";

const RootLayout = () => {
  const { isNotFoundPageShown } = useGlobalContext();

  return (
    <>
      <SkipContentLink scrollTo="main-content" />
      <SideBar />
      <Mods />
      <ShortcutsMenu />
      <Outlet />
      {!isNotFoundPageShown && <HooksNavigator />}

      <div className="container">
        <Footer />
      </div>

      <GlobalOverlay />
    </>
  );
};

export default RootLayout;
