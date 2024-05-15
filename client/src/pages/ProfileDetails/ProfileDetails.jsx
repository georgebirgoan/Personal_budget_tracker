import  './profileDetail.scss';
import { useState } from 'react';
//import {useDispatch,useSelector} from 'react-redux';
//import { dataFailure, dataStart, dataSucces } from '../../redux/cart/IncomeReducer';
import axios  from 'axios';
import {toast} from 'react-toastify';

export default function ProfileDetails() {
    const [profileData,setProfileData] = useState({});
   // const {loading,error}=useSelector((state)=>state.cart)
    //const dispatch=useDispatch()


  const handleChange =(e)=>{
    setProfileData({...profileData,[e.target.id]:e.target.value});
  }


  const handleSubmit =async (e)=>{
      e.preventDefault();
      try{
       // dispatch(dataStart());

        const response=await axios.post(URL,profileData,{withCredentials:true});

        console.log('response from server');
        
        if(response.success === false){
          console.log(response.message);
          //dispatch(dataFailure(response.message));
          return;
        }
      
        //dispatch(dataSucces());
        toast.success("Ieii date primite cu succes")
  

      }catch(error){
        //dispatch(dataFailure(error.message));
        toast.error("date eronate");

      }
   

  }


  console.log("forma data",profileData);
  return (
    <div className='containerProfile'>
      <div className="backProfile">
       
       <form onSubmit={handleSubmit} className="formProfile">
          <h3>Profile</h3>

            <div class="circular-image">
              <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="mage"/>
            </div>


          <div className='divspan2'>
          <span className='user' >Username</span>
          </div>    
            <input className='input2' type="text" placeholder="Name " id="username" onChange={handleChange} />

       <div className="divspan2">
              <span className='user' >Email</span>
            </div>   
          <input  type="text" placeholder="Email or Phone" id="email"  onChange={handleChange} />

    
          <div className="divspan2">
              <span className='user' >Password</span>
          </div>   
          <input   type="password" placeholder="Password" id="password" onChange={handleChange} />


          <button  >Update</button>

          <div className='footerContainer3'>
            <span className='delete'>Delete</span>
            <span className='signOut3'>Sign Out</span>
          </div>
          
       </form>

      </div>
      
      

    </div>
  )
}
