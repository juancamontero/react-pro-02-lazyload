import { Suspense } from "react";
import logo from "../../public/logo.svg";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter> 
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((route) => (
                <li key={route.path}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
