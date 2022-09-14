import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";


export  function AdminRoute(){
    const {isAuth} = useAuthContext()

    if(!isAuth){
        return <Navigate to = '/login'/>
    }
    return (
        <div>
            <Outlet/>
        </div>
    )
}