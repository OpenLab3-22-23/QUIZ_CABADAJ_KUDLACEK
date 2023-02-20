import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import LogIn from "../auth/Login";
import SignUp from "../auth/SignUp";
import Dejepis from "../Dejepis";
import Fyzika from "../Fyzika";
import Informatika from "../Informatika";
import Matematika from "../Matematika";
import QuizScore from "../QuizScore";
import Random from "../Random";
import Slovencina from "../Slovencina";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/slovencina",
    element: <Slovencina />
  },
  {
    path: "/matematika",
    element: <Matematika />
  },
  {
    path: "/informatika",
    element: <Informatika/>
  },
  {
    path: "/dejepis",
    element: <Dejepis />
  },
  {
    path: "/fyzika",
    element: <Fyzika />
  },
  {
    path: "random",
    element: <Random />
  },
]);