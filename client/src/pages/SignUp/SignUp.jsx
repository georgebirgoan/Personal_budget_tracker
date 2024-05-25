import './signup.scss';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import OAuth from '../../components/OAuth/OAuth';


export default function SignUp() {
  const navigate=useNavigate();
  const [isLoading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  console.log(process.env.REACT_APP_BACKEND_URL)
  const [formData,setFormData] = useState({})

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }


  const handleSubmit=async (e) =>{
    e.preventDefault();//dont refrest page until have data
    try{

      setLoading(true);
      setError(false)
      const data=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/signup`,formData);
      console.log("data client",data);
      
      if(data != null){
        setLoading(false);
        setError(false);
        toast.success("Va-ti inregistrat cu succes!")
        navigate('/login')
      }else{
        toast.error("Nu exista date primite de la client!")
      }
    
    }catch(error){
      setLoading(false);
      setError(true)
      toast.error("Inregistrare esuata!");
    }

  };
  
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
          <input onChange={handleChange} className='inputSignIn' type="password" placeholder="Password" id="password" />


          <button >Sign Up</button>

          
          <div className="social1">
            <OAuth/> 
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
