import './navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import WalletIcon from '@mui/icons-material/Wallet';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import chart from '../../images/chart.png'
import loginImg from '../../images/loginImg.png'
import signImg from '../../images/singImg.png'
import { useState } from 'react';
import { useSelector } from 'react-redux';

import CsvData from '../CSV/CsvData';

export default function Navbar() {
  const location = useLocation();
  const {currentUser}=useSelector(state=>state.user);
  console.log('usercurrent',currentUser);


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
      
            <div className="icons">

              {/* <div className="notification">
                  <NotificationsNoneIcon/>
              </div> */}

              <div className="csv">
                  <CsvData/>
              </div>

              <div className="user">
                {currentUser ? (
                  <>
                    <Link to='/profile'>
                      <img src={currentUser.profilePicture} alt='User profile' />
                      <span className='nume' >  {currentUser.username}</span>
                    </Link>
                  </>
                ) : (
                  <>
                  <div className="sign">
                    <img src={signImg} alt='sign' />
                    <Link to='/login'>Login</Link>
                  </div>

                  <div className="log">
                    <img src={loginImg} alt='login' />
                    <Link to='/signup'>Sign Up</Link>
                  </div>
                  </>
                )}
              </div>
  



            </div>


        

  

        </div>



    )


  }



