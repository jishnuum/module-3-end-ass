import {
    createBrowserRouter,
} from "react-router-dom";
import Userlayout from "../layout/Userlayout";
import Homepage from "../pages/Homepage";
import Productpage from "../pages/Productpage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Userlayout />,
        children: [
            {
                path: "",
                element: <Homepage />
            },{
                path:"productcard/:id",
                element:<Productpage/>
            }
        ]

    },
]);
