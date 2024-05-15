import './navbar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link, useLocation } from 'react-router-dom';
import WalletIcon from '@mui/icons-material/Wallet';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import chart from '../../images/chart.png'
import loginImg from '../../images/loginImg.png'
import signImg from '../../images/singImg.png'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {
  const location = useLocation();


  // Verifică dacă locația curentă este '/login' sau '/signup'
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';
  const [isOpen, setIsOpen] = useState(false);


    return (

        <div className="navbar">

          <div className="logo">
              <WalletIcon/>
              <span>Budget Wallet</span>
          </div>
      
      
          <div className="center">
                <div className="sign">
                <img src={signImg} alt='sign' />
                  <Link to={'/signup'}>SignIn</Link>
                </div>
                <div className="login">
                  <img src={loginImg} alt='login' />
                  <Link to={'/login'}>Login</Link>
                </div>
          </div>
            
            <div className="icons">

              <div className="notification">
                  <NotificationsNoneIcon/>
              </div>

              <div className="user">
                  <img src={chart} alt='image'/>
                  <Link to={'/profile'}>Ion</Link>
              </div>


            </div>


        

  

        </div>



    )


  }



