import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Welcome from './pages/Welcome.jsx'
import GameSetup from './pages/GameSetup.jsx'
import Game from './pages/Game.jsx'
import GameResults from './pages/GameResults.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Welcome />,
          errorElement: <ErrorPage />
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
    ]);

    return <RouterProvider router={router} />
}

export default Router;