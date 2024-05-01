import Home from "./pages/Home/Home";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Transaction from "./pages/Transaction/Transaction";
import Income from "./pages/Income/Income";
import Expenses from "./pages/Expenses/Expenses";
import SignUp from './pages/SignUp/SignUp'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<Home/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="transaction" element={<Transaction/>}/>
        <Route path="income" element={<Income/>}/>
        <Route path="expenses" element={<Expenses/>}/>
      </Route>
    </Routes>
   
   </BrowserRouter>
  );
}

export default App;
