import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
