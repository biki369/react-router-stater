import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import About from "../pages/about/About.jsx";
import Contact from "../pages/contact/Contact.jsx";
import ErrorPage from '../pages/error-page/ErrorPage.jsx';

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },

]);


// ===========this not .js but .jsx vite not recognize=======
