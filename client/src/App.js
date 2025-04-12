import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './pages/login/Login';
import SideBar from './components/sidebar/SideBar';
import SignUp from './pages/SignUp/SignUp';
import Income from './pages/Income/Income';
import Expenses from './pages/expenses/Expenses';
import Footer from './pages/Footer/Footer';
import './styles/global.scss';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoutes from "./pages/PrivateRoute/PrivateRoutes"
import EditIncome from "./pages/EditIncome/EditIncome"
import EditExpense from "./pages/EditExpense/EditExpense"
import Card from './pages/Card/Card';


const MainLayout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        {/* <div className="menuContainer">
          <SideBar />
        </div> */}
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};



const router = createBrowserRouter([
  {
    path: '/',
    element: (
     /* <PrivateRoutes>
      </PrivateRoutes>*/
        <MainLayout />
    ),
    children: [
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/income',
        element: <Income />,
      },
      {
        path: '/card',
        element: <Card name={'Andre'} isPacked={true}  />,
      },
      {
        path: '/income/edit/:id',
        element: <EditIncome />,
      },
      
      {
        path: '/expense',
        element: <Expenses />
      },
      {
        path: '/expense/edit/:id',
        element: <EditExpense />,
      },
      {
        path: '/profile/:id',
        element: <ProfileDetails />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
