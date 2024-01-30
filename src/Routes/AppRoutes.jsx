import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import HookPage from "../Components/Home/Hooks/HookPage";
import { useGlobalContext } from "../Context/GlobalContext";
import RouteLayout from "./RouteLayout";

const AppRoutes = () => {
  const { numbersOfPages } = useGlobalContext();
  const hooksPagesRoutes = numbersOfPages.map((pageNumber) => (
    <Route key={pageNumber} path=":id" element={<HookPage />} />
  ));

  const routes = createRoutesFromChildren(
    <Route path="/" element={<RouteLayout />}>
      <Route path="/" element={<Home />}>
        <Route index element={<Navigate to="/1" />} />
        {hooksPagesRoutes}
      </Route>
    </Route>
  );

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
export default AppRoutes;
