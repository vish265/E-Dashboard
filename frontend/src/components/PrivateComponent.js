import React from "react";
import { Navigate,Outlet } from "react-router-dom";
 {/* use of this component to validation as user is not registerd he wont access the other pages of website except signup page*/} 
const PrivateComponent = ()=>{
    const auth = localStorage.getItem("user");
    return auth? <Outlet/>: <Navigate to='/signup'/>
}

export default PrivateComponent;