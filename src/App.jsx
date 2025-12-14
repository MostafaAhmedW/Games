import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "./Components/Game/Game";
import Genre from "./Components/Genre/Genre";
import Layout from "./Components/Layout/Layout";
import DetailsGame from "./Components/DetailsGame/DetailsGame";
import NotFound from './Components/NotFound/NotFound';

export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Game/> },
        { path: "game", element: <Game/> },
        { path: "game/:genre", element: <Game/> },
        { path: "genre", element: <Genre/> },
        { path: "details/:slug", element: <DetailsGame/> },
        { path: "*", element: <NotFound/> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}
