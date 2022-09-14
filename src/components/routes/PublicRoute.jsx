import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

export function PublicRoute(){
    const {isAuth} = useAuthContext();
    
    if(isAuth && JSON.parse(localStorage.getItem("ROL"))=== "USER"){
        return <Navigate to= '/user' />
    }

    if(isAuth && JSON.parse(localStorage.getItem("ROL"))=== "ADMIN"){
        return <Navigate to= '/dashboard/admin' />
    }
    return(
        <div>
            <Outlet />
        </div>
    )
}