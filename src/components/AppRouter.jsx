import React from "react";
import { useContext } from "react";
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from "../context/context";
import { priveteRoutes, publicRoutes } from "../router/routes";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Routes>
            {isAuth 
                ?
                priveteRoutes.map(route => 
                    <Route key={route.path} element={route.element} path={route.path} exact={route.exact}/>
                )
                :
                publicRoutes.map(route => 
                    <Route key={route.path} element={route.element} path={route.path} exact={route.exact}/>
                )
            }
        </Routes>
    )
}

export default AppRouter