import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setLoading } from "../../redux/cart/IncomeReducer";
import Loading from "../Loading/Loading";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";


export default function PrivateRoute() {
    const location = useLocation();
    const { currentUser } = useSelector(state => state.user);
    const {loading}=useSelector((state)=>state.income);

    const navigate = useNavigate();
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(setLoading(true));  
      if (currentUser && (location.pathname === "/login" || location.pathname === "/signup")) {
            navigate('/');
        }else {
            // Altfel, închide starea de încărcare
            dispatch(setLoading(false));
        }
    },[currentUser,dispatch,navigate,location.pathname]);

    
    if(loading){
        return <Loading/>
    }
    
    // Dacă este autentificat, afișează conținutul privat
    return (
        currentUser ? <Outlet/> : <Navigate to={'/login'}/>  
    );
}
