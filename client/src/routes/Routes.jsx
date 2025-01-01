import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            }
            // {
            //     path: '/shop/:id',
            //     element: <SingleFood />,
            //     loader: ({params}) => fetch(`http://localhost:8800/api/v1/foods/${params.id}`)
            // } 
        ]
    },
    {
        path: '*',
        element: <h1>OOps page not found</h1>
    }
])