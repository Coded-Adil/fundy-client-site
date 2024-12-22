import {
    createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import AddCampaign from "../pages/AddCampaign";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllCampaigns from "../pages/AllCampaigns";
import CampaignDetails from "../pages/CampaignDetails";
import PrivateRoute from "./PrivateRoute";
import MyCampaign from "../pages/MyCampaign";
import MyDonations from "../pages/MyDonations";
import UpdateCampaign from "../pages/updateCampaign";
import Error from "../pages/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://fundy-server.vercel.app/runningCampaign'),
            },
            {
                path: "/campaign",
                element:
                    <PrivateRoute>
                        <AllCampaigns />
                    </PrivateRoute>,
                loader: () => fetch('https://fundy-server.vercel.app/campaign'),
            },
            {
                path: "/campaign/:id",
                element:
                    <PrivateRoute>
                        <CampaignDetails />
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`https://fundy-server.vercel.app/campaign/${params.id}`),
            },
            {
                path: "/addCampaign",
                element:
                    <PrivateRoute>
                        <AddCampaign />
                    </PrivateRoute>,
            },
            {
                path: "/myCampaign",
                element:
                    <PrivateRoute>
                        <MyCampaign />
                    </PrivateRoute>
            },
            {
                path: "/myDonations",
                element:
                    <PrivateRoute>
                        <MyDonations />
                    </PrivateRoute>
            },
            {
                path: "/updateCampaign/:id",
                element:
                    <PrivateRoute>
                        <UpdateCampaign />
                    </PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
        ]
    },
]);

export default router;