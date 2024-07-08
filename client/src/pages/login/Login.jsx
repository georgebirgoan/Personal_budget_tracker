

import './login.scss';
import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import  axios  from "axios"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { signInStart,signInFailure,signInSuccess } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from '../../components/OAuth/OAuth';
import { setLoading } from '../../redux/cart/IncomeReducer';


export default function Login() {
  const [formData,setFormData] = useState({})
  const {loading}=useSelector((state)=>state.income);
  const { currentUser } = useSelector(state => state.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  
 


 useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch]);


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }

  const handleSubmit=async (e) =>{
    e.preventDefault();//dont refrest page until have data
    dispatch(setLoading(true));
    try{
      dispatch(signInStart());
      //${process.env.REACT_APP_BACKEND_URL}
        const response= await axios.post(`http://localhost:3001/api/signin`, formData,{withCredentials:true});
        const { token } = response.data;

      if(response.success === false){
        toast.error("Token invalid");
        dispatch(setLoading(false));
        dispatch(signInFailure(response.message))
        return;
      }


      if(response != null){
        dispatch(setLoading(false));
        dispatch(signInSuccess(response.data.user));
        localStorage.setItem("Bearer",token);
        toast.success("Successfully logged in!");
        navigate('/')
      }

    }catch(error){
      dispatch(signInFailure(error.message))
      dispatch(setLoading(false));
      toast.error("Login failed, please register first!!");

    }
  };

  if (currentUser) {
    return <Navigate to="/" />;
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
          <input className='inputLogin' onChange={handleChange}  type="text" placeholder="Email or Phone" id="email" />

    
          <div className="divspan1">
              <span className='user' >Password</span>
            </div>   
            
          <input className='inputLogin'  onChange={handleChange}  type="password" placeholder="Password" id="password" />


          <button >
          {loading ? (
          <span>Loading...</span>
          ):(
            <span>Submit</span>
          )} 
          </button>
          
          <div className="social2">
            <OAuth/> 
          </div>

          <div className='footerContainer12'>
            <span className='footer12'>Don't have an account?</span>
            <Link to='/signup' className='signUp'>Sign Up</Link>
          </div>

          </form>
      </div>
    </>
  );
}
