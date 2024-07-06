import { createBrowserRouter } from "react-router-dom";
import Home from "../SOFAAH/Home";
import Contact from "../SOFAAH/Contact";
import Error from "../SOFAAH/Error";
import About from "../SOFAAH/About";
const router = createBrowserRouter([

    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    },
    {
        path:"/About",
        element: <About/>

    }, 
    { 
        path:"/Contact",
        element: <Contact/>

    }, 
    


])




export default router;