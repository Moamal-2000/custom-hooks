import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import HookPage from "../Components/Home/Hooks/HookPage";
import RootLayout from "./RootLayout";
import NotFoundPage from "../Components/Shared/NotFoundPage/NotFoundPage";

const AppRoutes = () => {
  const routes = createRoutesFromChildren(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<HookPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  );

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
