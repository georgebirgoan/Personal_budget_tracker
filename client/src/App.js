//1.De facut in Categories daca locatia este in income sa se afiseze cele din income,
//altfel cele din expense(cu useLocation cum am facut pt navbar) + de facut style pt fieccare
//1.1 De facut logo pt fiecare descriere
//2.De facut functii pt total income,expense,net
//3.de pus in dashboard cele cu total income,expenses sus facute colorat frumos..4
//de asemenea de facut cele 2 grafice unul stanga normal si unul dreapta
//4.Pt salar minim,maxim de facut o functie care sa afle din income
//5.De sterg produsele din income/expenses(cos de gunoi-functie)
//6.De facut functie pt a edita produsele(update)
//7.De facut serverul si api pt logare(cookie ,sesiune etc)
//8.De lucrat la profil,style si update(la fel api pt update luat din proiect anterior);


//apoi la lucrurile avansate


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
import ProfileDetails from "./pages/ProfileDetails/ProfileDetails";


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route index element={<Home/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="profile" element={<ProfileDetails/>}/>
        <Route path="transaction" element={<Transaction/>}/>
        <Route path="income" element={<Income/>}/>
        <Route path="expenses" element={<Expenses/>}/>
      </Route>
    </Routes>
   
   </BrowserRouter>
  );
}

export default App;
