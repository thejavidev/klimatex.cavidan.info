import { useRoutes } from "react-router"
import Home from "../../pages/Home"
import About from "../../pages/About"
import Service from "../../pages/Service"
import Projects from "../../pages/Project/Projects"
import ProjectsSingle from "../../pages/Project/ProjectsSingle"
import Production from "../../pages/Production/Production"
import ProductionSub from "../../pages/Production/ProductionSub"
import Distributor from "../../pages/Distributor"
import License from "../../pages/License"
import Blog from "../../pages/Blog/Blog"
import BlogItem from "../../pages/Blog/BlogItem"
import Contact from "../../pages/Contact"
// import DistributorItem from "../../pages/DistributorItem"
// import DistributorSingle from "../../pages/DistributorSingle"



const Router = ({data}) => {
    const mainrouter = [
        {
            path:'/',
            element:<Home data={data} />,
            exact : true
        },
        {
            path:'/about',
            element:<About data={data} />
        },
        {
            path:'/service/:slug_az',
            element:<Service data={data} />
        },
        {
            path:'/project',
            element:<Projects data={data} />
        },
        {
            path:'/project/:slug_az',
            element:<ProjectsSingle data={data} />
        },
        {
            path:'/production',
            element:<Production data={data} />
        },
        {
            path:'/production/:slug_az',
            element:<ProductionSub data={data}  />
        },
        {
            path:'/distributor/:id/:slug_az',
            element:<Distributor data={data} />
        },
        // {
        //     path:'/distributor/:id',
        //     element:<DistributorItem data={data} />
        // },
        // {
        //     path:'/distributor/:id/:id',
        //     element:<DistributorSingle data={data} />
        // },
        {
            path:'/license',
            element:<License />
        },
        {
            path:'/blog',
            element:<Blog />
        },
        {
            path:'/blog/:slug_az',
            element:<BlogItem />
        },
        {
            path:'/contact',
            element:<Contact />
        },
       
    ]
    const route = useRoutes(mainrouter);
    return <>{route}</>
}

export default Router


