import { useDispatch, useSelector } from "react-redux";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { setLoading } from "../../redux/cart/IncomeReducer";
import Loading from "../Loading/Loading";

export default function PrivateRoute() {
  const location = useLocation();
  const { currentUser } = useSelector(state => state.user);
  const { loading } = useSelector(state => state.income);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const checkUser = async () => {
      // Simulate delay for authentication check
      await new Promise(resolve => setTimeout(resolve, 200));
      dispatch(setLoading(false));
    };
    checkUser();
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (currentUser) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
}
