
import logo from "../../public/logo.svg";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { FormikAbstractionPage, FormikBasicPage, FormikComponentsPage, FormikYupPage, RegisterPage } from "../03-forms/pages";



export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (!isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (!isActive ? "nav-active" : "")}
              >
                Formik basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (!isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (!isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstraction"
                className={({ isActive }) => (!isActive ? "nav-active" : "")}
              >
                Formik Abstraction
              </NavLink>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="register" element={<RegisterPage/>} />
          <Route path="formik-basic" element={<FormikBasicPage/>} />
          <Route path="formik-yup" element={<FormikYupPage/>} />
          <Route path="formik-components" element={<FormikComponentsPage/>} />
          <Route path="formik-abstraction" element={<FormikAbstractionPage/>} />
          <Route path="home" element={<h1>Home Page</h1>} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
