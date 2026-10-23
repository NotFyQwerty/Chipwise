import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/home";
import { SignInPage } from "@/pages/sign-in";
import { SignUpPage } from "@/pages/sign-up";

// The router lives in the app layer because only this layer is allowed to know about every page
export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
]);
