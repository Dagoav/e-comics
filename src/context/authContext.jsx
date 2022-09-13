import { createContext,useCallback, useContext, useMemo, useState } from "react";
import  PropTypes  from "prop-types";

const MY_AUTH = 'MY_AUTH'
export const AuthContext = createContext();


export function AuthContextProvider({children}){

    const [isAuth, setAuth] = useState(window.localStorage.getItem(MY_AUTH))?? false

    const login = useCallback(()=>{
        window.localStorage.setItem(MY_AUTH, true);
        setAuth(true);
    },[])


    const logout = useCallback(()=>{
        window.localStorage.clear();
        setAuth(false)
    },[])

const value = useMemo(()=> ({
    login,
    logout,
    isAuth
}), [isAuth, logout, login])

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthContextProvider.propTypes={
    children: PropTypes.object
}

export function useAuthContext() {
    return useContext(AuthContext)
}