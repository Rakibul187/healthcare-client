import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blogs from "../../Blogs/Blogs";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login/Login";
import Signup from "../../Login/Signup/Signup";
import AddService from "../../Services/AddService/AddService";
import MyReview from "../../Services/MyReview/MyReview";
import ServiceDetails from "../../Services/ServiceDetails/ServiceDetails";
import Services from "../../Services/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <Signup></Signup>
            },
            {
                path: '/blog', element: <Blogs></Blogs>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/services', element: <PrivateRoute><Services></Services></PrivateRoute>
            },
            {
                path: '/addservice', element: <AddService></AddService>
            },
            {
                path: '/myreview', element: <MyReview></MyReview>
            }
        ]
    }
])

export default router;