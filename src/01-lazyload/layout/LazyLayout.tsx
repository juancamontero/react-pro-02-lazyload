import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../";

export const LazyLayout = () => {
  return (
    <div className="main-lazy-page">
      <h1>LazyLayout Section</h1>
      <>
        <div className="lazy-menu">
          <ul className="main-layout">
            <li>
              <NavLink
                to="lazy1"
                className={({ isActive }) => (!isActive ? "nav-active" : "")}
              >
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="lazy2"
                className={({ isActive }) => (!isActive ? "nav-active" : "")}
              >
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="lazy3"
                className={({ isActive }) => (!isActive ? "nav-active" : "")}
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </div>
      </>
      <Routes>
        <Route path="/lazy1" element={<LazyPage1 />} />
        <Route path="/lazy2" element={<LazyPage2 />} />
        <Route path="/lazy3" element={<LazyPage3 />} />

        <Route path="/*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;