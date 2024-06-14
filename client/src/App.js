import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import SideBar from "./components/sidebar/SideBar";
import SignUp from './pages/SignUp/SignUp';
import Income from './pages/Income/Income';
import Expenses from './pages/expenses/Expenses';
import Footer from './pages/Footer/Footer';
import './styles/global.scss';
import EditIncome from './pages/EditIncome/EditIncome';
import EditExpense from './pages/EditExpense/EditExpense';
import PrivateRoute from './pages/PrivateRoute/PrivateRoutes'; // Corect importul
import ProfileDetails from "./pages/ProfileDetails/ProfileDetails";
import Dasboard from "./pages/Dashboard/Dashboard";

const ProtectedLayout = () => {
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
      <Footer />
    </div>
  );
};

const PublicLayout = () => {
  return (
    <div className="main">
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicLayout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
  {
    path: "/signup",
    element: <PublicLayout />,
    children: [
      {
        path: "",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoute />, // Wrapper pentru rutele protejate
    children: [
      {
        path: "/",
        element: <ProtectedLayout />,
        children: [
          {
            path: "",
            element: <Dasboard />,
          },
          {
            path: "income",
            element: <Income />,
          },
          {
            path: "expense",
            element: <Expenses />,
          },
          {
            path: "profile",
            element: <ProfileDetails />,
          },
          {
            path: "edit",
            element: <Outlet />,
            children: [
              {
                path: "income/:id",
                element: <EditIncome />,
              },
              {
                path: "expense/:id",
                element: <EditExpense />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
