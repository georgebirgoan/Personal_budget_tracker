import Navbar from '../../components/navbar/Navbar';
import './login.scss';
import {Link} from 'react-router-dom'
import { useState } from 'react';

export default function Login() {
  const [dataFormLogin,setDataLogin]=useState({});
  
  const handleChange=(e)=>{
    setDataLogin({...dataFormLogin,[e.target.id]:e.target.value});
  }
  console.log('data login',dataFormLogin);

  const handleSubmit=(e)=>{
    

  }
    





  return (
    <>


    <div className='contLogin'>
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <form  onSubmit={handleSubmit} className='form1'>
            <h3>Login</h3>
          

            <div className="divspan1">
              <span className='user' >Email</span>
            </div>   
          <input className='inputLogin' onClick={handleChange}  type="text" placeholder="Email or Phone" id="username" />

    
          <div className="divspan1">
              <span className='user' >Password</span>
            </div>   
            
          <input className='inputLogin'  onClick={handleChange}  type="password" placeholder="Password" id="password" />


          <button >Login</button>
          
          <div className="social">
            <div className="go"><i className="fab fa-google"></i> Google</div>
            <div className="fb"><i className="fab fa-facebook"></i> Facebook</div>
          </div>

          <div className='footerContainer'>
            <span className='footer'>Don't have an account?</span>
            <Link to='/signup' className='signUp'>Sign Up</Link>
          </div>

          </form>
      </div>
    </>
  );
}
