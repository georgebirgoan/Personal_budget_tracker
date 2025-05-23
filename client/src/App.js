import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './styles/global.scss';
import MainLayout from './router/MainLayout';  // Separate the layout into its own component
import Dashboard from './features/dashboard/Dashboard';
import Income from './features/income/income/Income';
import Expenses from './features/expenses/expense/Expenses';
import ProfileDetails from './features/profile/ProfileDetails';
import EditIncome from './features/income/edit/EditIncome';
import EditExpense from './features/expenses/edit/EditExpense';
import Card from './components/Card/Card';
import Login from './features/auth/login/Login';
import SignUp from './features/auth/signup/SignUp';

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "income", element: <Income /> },
      { path: "income/edit/:id", element: <EditIncome /> },
      { path: "expense", element: <Expenses /> },
      { path: "expense/edit/:id", element: <EditExpense /> },
      { path: "profile/:id", element: <ProfileDetails /> },
      { path: "card", element: <Card name="Andre" isPacked={true} /> },
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
  ];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



//Rute api locatii
/*OAuth pt google
Login 
Profile details*/
