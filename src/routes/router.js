import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>, 
        children: [
            {
                path: "/", 
                element: <Home></Home>
            }, 
            {
                path: "/register", 
                element: <Register></Register>
            },
            {
                path:"/login", 
                element: <Login></Login>
            }
        ]
    }
])

export default router;