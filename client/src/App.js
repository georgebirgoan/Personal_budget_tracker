import Home from "./pages/home/Home";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Transaction from "./pages/transaction/Transaction";
import Income from "./pages/Income/Income";
import profileDetails from './pages/ProfileDetails/ProfileDetails';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<Home/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="transaction" element={<Transaction/>}/>
        <Route path="income" element={<Income/>}/>
        <Route path="expenses" element={<Transaction/>}/>
        <Route path="profile" element={<profileDetails/>}/>
        
  


      </Route>

    </Routes>
   
   </BrowserRouter>
  );
}

export default App;
