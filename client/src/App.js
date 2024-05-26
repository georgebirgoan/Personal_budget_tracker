//protected routes for signup/in
//Button loading
//responsive for phone
//update for user take token and put in local storage



import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import SideBar from "./components/sidebar/SideBar";
import SignUp from './pages/SignUp/SignUp'
import Income from './pages/Income/Income'
import Expenses from './pages/expenses/Expenses'
import Footer from './pages/Footer/Footer'
import './styles/global.scss'
import EditIncome from './pages/EditIncome/EditIncome';
import EditExpense from './pages/EditExpense/EditExpense';
import PrivateRoutes from './pages/PrivateRoute/PrivateRoutes'
import { useEffect } from "react";
import { generateToken, messaging } from "./firebase";
import { onMessage } from "firebase/messaging";
import ProfileDetails from "./pages/ProfileDetails/ProfileDetails";
import Dasboard from "./pages/Dashboard/Dashboard";
 

function App() {

    useEffect(()=>{
      console.log('efectt')
      generateToken();
      onMessage(messaging,(payload)=>{
        console.log(payload);
      })
    },[]);

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
          element: <PrivateRoutes />,
          children:[
            {
              path:'/profile',
              element:<ProfileDetails/>
            }
          ]
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