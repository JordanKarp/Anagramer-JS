import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Welcome from './pages/Welcome.jsx'
import GameSetup from './pages/GameSetup.jsx'
import Game from './pages/Game.jsx'
import GameResults from './pages/GameResults.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import UserPage from './pages/UserPage.jsx'

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Welcome />,
        },
        {
          path: "/setup",
          element: <GameSetup />
        },
        {
          path: "/play",
          element: <Game />
        },
        {
          path: "/results",
          element: <GameResults />
        },
        {
          path: "/user",
          element: <UserPage />
        },
        {
          path: "/*",
          element: <ErrorPage />
        },
    ]);

    return <RouterProvider router={router} />
}

export default Router;