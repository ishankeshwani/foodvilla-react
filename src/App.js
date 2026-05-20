import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";
import "../index.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const AppLayout = () =>{
    return ( 
    <Provider store={appStore}>
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    </Provider>
    );
};

const appRouter = createBrowserRouter([


   

    {
        path:"/",
        element: <AppLayout/>,

        children: [
              {
        path:"/",
        element: <Body/>,
      
    },
      {
        path:"/contact",
        element: <Contact/>,
    },
    {
        path:"/about",
        element: <About/>,
    },
      {
        path:"/restaurants/:resId",
        element: <RestaurantsMenu/>,
    },
    {
        path:"/cart",
        element:<Cart/>,
    },
        ],

        errorElement: <Error/>,
      
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);