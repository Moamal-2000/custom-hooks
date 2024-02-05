import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import HookPage from "../Components/Home/Hooks/HookPage";
import NotFoundPage from "../Components/Shared/NotFoundPage";
import RootLayout from "./RootLayout";

const AppRoutes = () => {
  const routes = createRoutesFromChildren(
    <Route exact path="/" element={<RootLayout />}>
      <Route exact path="/" element={<Home />}>
        <Route path="/" element={<HookPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  );

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
