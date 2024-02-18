import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./2048_game";
import Currency_Generator from "./Currency_Generator";
import "./index.css";
import Tic_tac_toe from "./Tic_tac_toe";
import Dice_game from "./Dice_game";
import ToDoLocal from "./ToDoLocal";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PortfolioLayout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "projects",
//         element: <Projects />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Tic_tac_toe /> */}
    {/* <Dice_game /> */}
    <Game />
    {/* <Currency_Generator /> */}
    {/* <ToDoLocal /> */}
    {/* <RouterProvider router={router} /> */}
    {/* <PortfolioLayout /> */}
    {/* <Projects /> */}
  </React.StrictMode>,
);
