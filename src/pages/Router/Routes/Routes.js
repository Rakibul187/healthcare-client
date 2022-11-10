import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blogs from "../../Blogs/Blogs";
import About from "../../Home/About/About";
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
                loader: ({ params }) => fetch(`https://healthcare-server.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/services', element: <Services></Services>
            },
            {
                path: '/addservice', element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myreview', element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/about', element: <About></About>
            }
        ]
    }
])

export default router;