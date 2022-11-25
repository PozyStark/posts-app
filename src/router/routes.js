import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostsIdPage";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";

export const priveteRoutes = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <PostIdPage/>, exact: true},
    {path: '/', element: <Navigate replace to="/posts"/>, exact: false}
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true},
    {path: '*', element: <Navigate replace to="/login"/>, exact: false}
]