import './signup.scss';
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar';

export default function SignUp() {
  return (
    <> 
    <Navbar/>

    <div className='body'>
      <div className="background2">
        <div className="shape2"></div>
        <div className="shape2"></div>
      </div>

      <form className='form2'>
        <h3>SignUp</h3>

        <span className='user2' htmlFor="username">Username</span>
        <input type="text" placeholder="Name " id="username" />


        <span className='user2' htmlFor="username">Email</span>
        <input type="text" placeholder="Email or Phone" id="username" />

        <span className='user2' htmlFor="password">Password</span>
        <input type="password" placeholder="Password" id="password" />

        <button>Sign Up</button>
        <div className="social2">
          <div className="go2"><i className="fab fa-google"></i> Google</div>
          <div className="fb2"><i className="fab fa-facebook"></i> Facebook</div>
        </div>

        <div className='footerContainer2'>
          <span className='footer2'>Already have an account?</span>
          <Link to='/login' className='signUp2'>Login</Link>
        </div>

        </form>
      </div>
    </>
  );
}
