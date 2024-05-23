import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import AuthLayout from "./components/auth/AuthLayout";
import SigninForm from "./components/auth/signin/SigninForm";
import SignupForm from "./components/auth/signup/SignupForm";

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

  {
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/signin",
        element: <SigninForm />,
      },
      {
        path: "/auth/signup",
        element: <SignupForm />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
