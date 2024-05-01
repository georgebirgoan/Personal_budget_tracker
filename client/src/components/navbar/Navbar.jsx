import './navbar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  // Verifică dacă locația curentă este '/login' sau '/signup'
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';

  if (!isLoginPage && !isSignUpPage) {
    return (
      <>
        <div className='containerNav'>
          <div className='wrapper'>
            <span>George Dasboard</span>
            <div className="middle">
              <div className="dashboard">
                <DashboardIcon/>
                <Link to='/'>Dashboard</Link>
              </div>
              <div className="dashboard">
                <PersonIcon/>
                <Link to='/profile'>Profile</Link>
              </div>
              <div className="dashboard">
                <AccountCircleIcon/>
                <Link to='/signup'>SignUp</Link>
              </div>
              <div className="dashboard">
                <VpnKeyIcon/>
                <Link to='/login'>SignIn</Link>
              </div>
            </div>
            <div className="items">
              <div className="item">
                <Link to="signin">
                  <img src={"#"} alt='imagine' /> {/*imagine user */}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </>
    );
  } else {
    return (
      <div className='containerNav2'>
        <div className='wrapper2'>
          <span>George Dasboard</span>


          <div className="middle2">
            <div className="dashboard2">
              <DashboardIcon/>
              <Link to='/'>Dashboard</Link>
            </div>
    
          </div>
          <div className="items2">
            <div className="item2">
  
            </div>
          </div>
        </div>
      </div>
    );
  }
}
