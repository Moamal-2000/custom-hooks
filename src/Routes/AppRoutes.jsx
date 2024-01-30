import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
  useLocation,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import HookPage from "../Components/Home/Hooks/HookPage";
import { hooksData } from "../Data/hooksData";
import RouteLayout from "./RouteLayout";
import { useEffect, useRef } from "react";

const AppRoutes = () => {
  const pathname = window.location.pathname
  const numbersOfPages = [
    ...new Set(hooksData.map((hookData) => hookData.page)),
  ];

  useEffect(() => {
    if (pathname === "/")
    window.location.href = '/pages';
  }, []);

  const routes = createRoutesFromChildren(
    <Route path="/" element={<RouteLayout />}>
      <Route path="/pages" element={<Home />}>
        {numbersOfPages.map((pageNumber) => {
          if (pageNumber === 1) {
            return (
              <Route index key={pageNumber} path=":id" element={<HookPage />} />
            );
          }

          return <Route key={pageNumber} path=":id" element={<HookPage />} />;
        })}
      </Route>
    </Route>
  );

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};
export default AppRoutes;
