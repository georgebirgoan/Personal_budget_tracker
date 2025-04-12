import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './pages/Footer/Footer';
import './styles/global.scss';
import MainLayout from './router/MainLayout';  // Separate the layout into its own component
import Dashboard from './pages/Dashboard/Dashboard';
import Income from './pages/Income/Income';
import Expenses from './pages/expenses/Expenses';
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import EditIncome from './pages/EditIncome/EditIncome';
import EditExpense from './pages/EditExpense/EditExpense';
import Card from './pages/Card/Card';
import Login from './pages/login/Login';
import SignUp from './pages/SignUp/SignUp';

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
