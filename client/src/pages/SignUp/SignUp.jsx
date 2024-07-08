import './signup.scss';
import {Link, Navigate} from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import OAuth from '../../components/OAuth/OAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setLoading } from '../../redux/cart/IncomeReducer';



export default function SignUp() {

  const navigate=useNavigate();
  const [error,setError]=useState(false);
  console.log(error);
  const {loading}=useSelector((state)=>state.income);
  const [formData,setFormData] = useState({})
  const { currentUser } = useSelector(state => state.user);
  const dispatch=useDispatch();

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }

  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch]);




  const handleSubmit=async (e) =>{
    e.preventDefault();//dont refrest page until have data
    dispatch(setLoading(true));
    try{

      setError(false)
      //${process.env.REACT_APP_BACKEND_URL}
      const data=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/signup`,formData);
      console.log("data client",data);
     
      if(data.success === false){
        toast.error("Erorr signUp");
        dispatch(setLoading(false));
        return;
      }



      if(data != null){
        setError(false);
        dispatch(setLoading(false));
        toast.success("You have registered successfully!")
        navigate('/login')
      }else{
        dispatch(setLoading(false));
        toast.error("No data received from the client!");
      }
    
    }catch(error){
      setError(true)
      dispatch(setLoading(false));
      toast.error("Inregistrare esuata!");
    }

  };

  if (currentUser) {
    return <Navigate to="/" />;
  }
  
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
            <input onChange={handleChange} className='inputSignIn' type="text" placeholder="Name " id="username" required />
               
            <div className="divspan">
              <span className='user2' >Email</span>
            </div>   
          <input onChange={handleChange} className='inputSignIn' type="text" placeholder="Email or Phone" id="email" required />
          
    
          <div className="divspan">
              <span className='user2' >Password</span>
            </div>   
          <input onChange={handleChange} className='inputSignIn' type="password" placeholder="Password" id="password" required />


           <button >
          {loading ? (
          <span>Loading...</span>
          ):(
            <span>Submit</span>
          )} 
          </button>

          
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
