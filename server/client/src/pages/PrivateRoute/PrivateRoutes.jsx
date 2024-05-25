import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import ProfileDetails from "../ProfileDetails/ProfileDetails";

export default function PrivateRoutes() {
    const {currentUser}=useSelector(state=>state.user);

    return (
        currentUser ? <ProfileDetails/> : <Navigate to={'/signup'}/>  

  )
}
