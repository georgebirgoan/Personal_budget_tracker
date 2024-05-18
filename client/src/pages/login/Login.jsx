import './login.scss';
import { useState } from "react"
import { Link } from "react-router-dom"
import  axios  from "axios"
//pt toastify we need the library from react and css
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { signInStart,signInFailure,signInSuccess } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [formData,setFormData] = useState({})
  console.log("login form",formData);
  //useSelector bucati specifice de stare din store(Redux) pt aplicatie
  const {isLoading,error}=useSelector((state)=>state.user);

  const navigate=useNavigate();

  //dispatch-reactualizeaza starea aplicatie folosind reduceri din redux
  const dispatch=useDispatch();

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }

  const handleSubmit=async (e) =>{
    e.preventDefault();//dont refrest page until have data
    try{
      dispatch(signInStart());
      const response= await axios.post('http://localhost:3001/api/auth/signin', formData,
      {withCredentials:true}
    );
      console.log("response from server",response);
      //const data = await response.json(); // Conversia răspunsului în format JSON
      
      if(response.success === false){
        console.log(response.message);
        dispatch(signInFailure(response.message))
        return;
      }
      dispatch(signInSuccess(response));
      toast.success("Va-ti inregistrat cu succes!");
      navigate('/')
    }catch(error){
      dispatch(signInFailure(error.message))
      toast.error("Something went wrong!");
    }
    

  };
    





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
