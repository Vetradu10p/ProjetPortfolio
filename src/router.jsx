import {createBrowserRouter} from "react-router-dom"
import HomePage from "./pages/HomePage"
import WorkDetail from "./pages/WorkDetail"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/projet/:id",
        element: <WorkDetail />
    },
])
