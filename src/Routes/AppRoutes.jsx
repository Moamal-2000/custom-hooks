import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import HookPage from "../Components/Home/Hooks/HookPage";
import { useGlobalContext } from "../Context/GlobalContext";
import RootLayout from "./RootLayout";

const AppRoutes = () => {
  const { numbersOfPages } = useGlobalContext();
  const hooksPagesRoutes = numbersOfPages.map((pageNumber) => (
    <Route key={pageNumber} exact path="/:id" element={<HookPage />} />
  ));

  const routes = createRoutesFromChildren(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}>
        {hooksPagesRoutes}
        <Route exact path="/" element={<HookPage />} />
      </Route>
    </Route>
  );

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
