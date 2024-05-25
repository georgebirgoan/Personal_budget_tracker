//Problem-->to add credentials:include because in the server will get undefined from cookie
import { useSelector,useDispatch } from "react-redux"
import {getDownloadURL, getStorage, uploadBytesResumable} from 'firebase/storage'
//we use useRef to upload an image from computer
import { useEffect, useRef, useState } from "react";
import './profileDetail.scss'
import { app } from "../../firebase.js";
import { ref } from "firebase/storage";
import { 
  updateUserStart,
  updateUserFailure,
  updateUserSuccess, 
  deleteUserStart,
  deleteUserFailure, 
  deleteUserSuccess,
  signOut
  } from "../../redux/user/userSlice.js"
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";



export default function ProfileDetails() {
  const navigate=useNavigate();
  console.log("sunt in profile");
  const dispatch = useDispatch();


  const fileRef=useRef(null);
    //state pt aplicatie
    const [image,setImage]=useState(undefined);
    const [imagePercent,setImagePercent]=useState(0);
    const [imageError,setImageError]=useState(false);
    const [formData,setFormData]=useState({});
    const [updateSuccess,setUpdateSuccess]=useState(false);
    const {currentUser,loading,error}=useSelector(state=>state.user); 

  //useefect for image after change
  useEffect(()=>{
    if(image){
      handleFileUpload(image)
      console.log("imagine efect0",image);
    }
  },[image])

  useEffect(() => {
    console.log(`imagePercent updated: ${imagePercent}`);
  }, [imagePercent]);
  
  //change image in firebase ->get URL for the image
    const handleFileUpload = async(image) =>{
      const storage=getStorage(app);
      const fileName=new Date().getTime() + image.name;
      const storageRef=ref(storage,fileName); 
      const uploadTask=uploadBytesResumable(storageRef,image);
    

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImagePercent(Math.round(progress));
      },
      () => {
        setImageError(true);
      },
      () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };

//change state from input
const handleChange =(e)=>{
  setFormData({...formData,[e.target.id]:e.target.value});
  console.log("formProf",formData);
}


//delete an user
const handleDeleteAccount=async () =>{
  try{
    console.log("delete user with",currentUser._id);
    dispatch(deleteUserStart());
    const res=await fetch(`http://localhost:3001/api/user/delete/${currentUser._id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
    },
    credentials: 'include'
  })

    console.log("res from server ",res);
    if(res.success === false){
      dispatch(deleteUserFailure(res));
      return;
    }

    toast.success("User deleted cu success")
    dispatch(deleteUserSuccess());
  
  }catch(error){
    dispatch(deleteUserFailure(error));
  }

}

//signOut function
const handleSignOut=async () =>{
    try{
      //we don t need response
      console.log("in signout  front")
      const res=await fetch("http://localhost:3001/api/auth/signout",{
        method:'GET',
      })
      dispatch(signOut());
      console.log("res from back",res);
      toast.success('Delogare cu succes!');
    }
    catch(error){
      toast.error("Delogare esuata!")
      console.log(error);
    }
}



//update data from profile
const handleSubmit= async (e)=>{
  e.preventDefault();
  try{
      dispatch(updateUserStart());
      const res=await fetch(`http://localhost:3001/api/user/update/${currentUser._id}`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
      credentials: 'include'
    })

    const data=await res.json();
    console.log("data update",data);
    
    if(data.success === false){
      toast.error("Datele exista deja,pune-ti altele.")
      dispatch(updateUserFailure(data));
      return;
    }
    dispatch(updateUserSuccess(data));
    setUpdateSuccess(true);
    toast.success("Updated data with success!");
  }catch(error){
    dispatch(updateUserFailure(error));
  }
};





  return (
    <div className='containerProfile'>
      <div className="backProfile">
       
       <form onSubmit={handleSubmit} className="formProfile">
          <h3>Profile</h3>

            <div class="circular-image">
              <input type="file" ref={fileRef} hidden
                  accept="image/*" onChange={(e)=>setImage(e.target.files[0])} />
                
                  {/*imagine profil mijloc*/}
                  <img src={formData.profilePicture || currentUser.profilePicture} alt="profile" 
                  className="" 
                  onClick={()=>fileRef.current.click()}
                  />

                      {/*process upload imagine*/}
                <div className="imageUpload">
          
                  {imageError ? (
                    <span className='ErMesaj'>
                      Error uploading image (file size must be less than 2 MB)
                    </span>
                  ) : imagePercent > 0 && imagePercent < 100 ? (
                    <span className='Uploading'>{`Uploading: ${imagePercent} %`}</span>
                  ) : imagePercent === 100 ? (
                    <span className='succes'>Image uploaded successfully</span>
                  ) : (
                    ''
                  )}
    
                </div>
        
            </div>


          <div className='divspan2'>
            <span className='user' >Username</span>
          </div>

            <div className="inputs">
              <input  defaultValue={currentUser.username} onChange={handleChange}
               className='input2' type="text" placeholder="Name " id="username" />
            </div>


            <div className="divspan2">
              <span className='user' >Email</span>
            </div> 
          <div className="inputs">
              <input   defaultValue={currentUser.email} onChange={handleChange}
              className='input2' type="text" placeholder="Email " id="email"  />
            </div>
    

          <div className="divspan2">
              <span className='user' >Password</span>
          </div> 

          <div className="inputs">
              <input  onChange={handleChange}
              className='input2' type="text" placeholder="password " id="Password"  />
            </div>



          <button className='update'  >Update</button>

          <div className='footerContainer3'>
            <span onClick={handleDeleteAccount}  className='delete'>Delete</span>
            <span  onClick={handleSignOut} className='signOut3'>Sign Out</span>
          </div>
          
       </form>

      </div>
      
      

    </div>
  )
}
