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


  // Verifică dacă locația curentă este '/login' sau '/signup'
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu =()=>{
    setIsOpen(prev=>!prev);
  }

  const closeButon=()=>{
    setIsOpen(false);
  }


    return (

        <div className="navbar">

          <div className="logo">
              <WalletIcon/>
              <span className='write'>Budget Wallet</span>
          </div>

          <div className={`hamburgerContainer ${isOpen ? "open" : ''}`} onClick={toggleMenu} >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <div className={`menu ${isOpen ? "show" :""}`}>
            <button className='closeBtn' onClick ={closeButon}>X</button>
            <a href="/">Dasboard</a>
            <a href="/income">Income</a>
            <a href="/expense">Expense</a>
          </div>



          {/* middle */}  
          <div className='middleNavbar'>
              <a href="/"><span className='nvSpan sp1'>Dasboard</span></a>
              <a href="/income"><span className='nvSpan sp2'>Income</span></a>
              <a href="/expense"><span className='nvSpan sp3'>Expense</span></a>
          </div>




                {/*Right part*/}
            <div className="containerRightNav">

              {/* <div className="notification">
                  <NotificationsNoneIcon/>
              </div> */}

                <div className="csv">
                    <CsvData />
                </div>

                <div className="user">
                    {currentUser ? (
                      <>
                        <Link to={`/profile/${currentUser._id}`}>
                          <img src={currentUser.profilePicture} alt='User profile' />
                        </Link>
                      </>
                    ) : (
                      <>
                      <div className="loginNamediv">
                        <Link  to='/login'><span className='loginName'>Log in</span></Link>
                      </div>

                      </>
                    )}
                </div>
            </div>
        </div>



    )


  }



