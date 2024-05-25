import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import Dasboard from "../Dashboard/Dashboard";

export default function PrivateRoute() {
    const { currentUser } = useSelector(state => state.user);

    // Verifică dacă utilizatorul este autentificat
    if (!currentUser) {
        // Dacă nu este autentificat, redirecționează către pagina de autentificare
        return <Navigate to="/login" />;
    }

    // Dacă este autentificat, afișează conținutul privat
    return (
        <>
            <ProfileDetails />
            <Dasboard />
        </>
    );
}
