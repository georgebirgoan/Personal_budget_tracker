import './signup.scss';
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar';
import { useState } from 'react';

export default function SignUp() {
  const [dataFormSign,setDataSign]=useState({});
  
  const handleChange=(e)=>{
    setDataSign({...dataFormSign,[e.target.id]:e.target.value});
  }
  
  const handleSubmit=(e)=>{}
  console.log('data sign in',dataFormSign);
    

  return (
    <> 

    <div className='contSign'>
        <div className="background2">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <form onSubmit={handleSubmit} className='form2'>
            <h3>SignUp</h3>
          

          <div className="divspan">
            <span className='user2' >Username</span>
          </div>    
            <input onChange={handleChange} className='inputSignIn' type="text" placeholder="Name " id="username" />
               
            <div className="divspan">
              <span className='user2' >Email</span>
            </div>   
          <input onChange={handleChange} className='inputSignIn' type="text" placeholder="Email or Phone" id="email" />

    
          <div className="divspan">
              <span className='user2' >Password</span>
            </div>   
          <input onSubmit={handleChange} className='inputSignIn' type="password" placeholder="Password" id="password" />


          <button >Sign Up</button>
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
