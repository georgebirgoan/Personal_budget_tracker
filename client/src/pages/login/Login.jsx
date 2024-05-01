import Navbar from '../../components/navbar/Navbar';
import './login.scss';
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <>
    <Navbar/>
    <div className='body'>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form className='form'>
        <h3>Login</h3>

        <span className='user' htmlFor="username">Username</span>
        <input type="text" placeholder="Email or Phone" id="username" />

        <span className='user' htmlFor="password">Password</span>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i> Google</div>
          <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
        </div>

        <div className='footerContainer'>
          <span className='footer'>Don't have in account?</span>
          <Link to='/signup' className='signUp'>SignUp</Link>
        </div>

        </form>
      </div>
    </>
  );
}
