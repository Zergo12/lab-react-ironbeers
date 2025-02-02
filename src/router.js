import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Root from './pages/Root'
import Beers, { BeersLoader } from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import BeerDetails, { beerDetailsLoader } from "./pages/BeerDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:'beers',
                loader: BeersLoader,
                element:<Beers/>
            },
            {
                path:'/:id',
                loader: beerDetailsLoader,
                element:<BeerDetails/>
            },
            {
                path:"newbeer",
                element:<NewBeer/>
            },
            {
                path:"random",
                element:<RandomBeer/>
            },
           
        ]
    }
])  

export default router
