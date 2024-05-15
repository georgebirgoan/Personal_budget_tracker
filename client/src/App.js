//Toate paginile sa fie responsive
//.De facut functie pt a edita produsele(update)
//.Pt salar minim,/maxim de facut o functie care sa afle din income
//De asemenea de facut grafic
//.De facut serverul si api pt logare(cookie ,sesiune etc)
//.De lucrat la profil,style si update(la fel api pt update luat din proiect anterior);

//apoi la lucrurile avansate



import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/SideBar";
import Dasboard from "./pages/Dashboard/Dashboard";
import SignUp from './pages/SignUp/SignUp'
import Income from './pages/Income/Income'
import Expenses from './pages/Expenses/Expenses'
import Footer from './pages/Footer/Footer'
import './styles/global.scss'
import EditIncome from './pages/EditIncome/EditIncome';
import EditExpense from './pages/EditExpense/EditExpense';
import ProfileDetails from "./pages/ProfileDetails/ProfileDetails";


function App() {

  const Layout = () => {
    return (
      <div className="main">
            <Navbar />
        <div className="container">

          <div className="menuContainer">
            <SideBar />
          </div>

          <div className="contentContainer">
              <Outlet />
          </div>
        </div>
          <Footer/>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dasboard />,
        },  
        {
          path: "/income",
          element: <Income />,
        },
        {
          path: "/expense",
          element: <Expenses />,
        },
        {
          path: "/profile",
          element: <ProfileDetails />,
        },


        {
          path: "/edit",
          element: <Outlet />,
          children: [
          {
            path: "income/:id",
            element: <EditIncome />, // Aici va fi componenta pentru editarea veniturilor
          },
          {
            path: "expense/:id",
            element: <EditExpense />, // Aici va fi componenta pentru editarea cheltuielilor
          },
        ],
      },
       
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;