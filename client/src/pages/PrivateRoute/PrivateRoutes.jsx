import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import Dasboard from "../Dashboard/Dashboard";
import { useEffect } from "react";
import { setLoading } from "../../redux/cart/IncomeReducer";
import Loading from "../Loading/Loading";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";


export default function PrivateRoute() {
    console.log("in private loading");

    const { currentUser } = useSelector(state => state.user);
    console.log(currentUser);

    const location = useLocation();
    const {loading}=useSelector((state)=>state.income);
    console.log(loading);

    const navigate = useNavigate();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(setLoading(true));
        
      /* if (currentUser && (location.pathname === "/login" || location.pathname === "/signup")) {
            navigate('/');
            dispatch(setLoading(false));
        }*/

        

    },[currentUser,dispatch,navigate,location.pathname]);

    
    
    /*if(loading){
        console.log("Load private");
        return <Loading/>
    }*/
    
    // Dacă este autentificat, afișează conținutul privat
    return (
        currentUser ? <Outlet/> : <Navigate to={'/'}/>  
    );
}
