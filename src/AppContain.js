
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AccesToken } from "./redux/authSlice";

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

const AppContain = () => {
const dispatch = useDispatch()

useEffect(() => { 

   
        dispatch(AccesToken());


}, [dispatch])

    return (
        <>
        <RouterProvider router={router} /> 
        </>       
    )
}

export default AppContain