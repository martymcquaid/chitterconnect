import { HomeIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Sign Up",
    to: "/signup",
    icon: null,
    page: <SignUpPage />,
  },
];