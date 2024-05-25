import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import Dasboard from "../Dashboard/Dashboard";

export default function PrivateRoute() {
    const { currentUser } = useSelector(state => state.user);
    const location = useLocation();
    // Verifică dacă utilizatorul este autentificat
    if (!currentUser) {
        // Dacă nu este autentificat, redirecționează către pagina de autentificare
        return <Navigate to="/login" />;
    }

    // Dacă este autentificat, afișează conținutul privat
    return (
        <>
            {location.pathname === "/" ? <Dasboard /> : <ProfileDetails />}
        </>
    );
}
