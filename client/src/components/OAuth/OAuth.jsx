//we make google auth with firebase
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import { signInSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    const handleGoogleClick=async ()=>{
        try{
            const provider=new GoogleAuthProvider();
            const auth=getAuth(app);
            const result=await signInWithPopup(auth,provider);  
            const res=await fetch("http://localhost:3001/api/auth/google",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL,
                }),
                credentials: 'include'
            }) 
            const data =await res.json();

            dispatch(signInSuccess(data));
            navigate("/");
        }catch(error){
            console.log('could not login with google', error);
            }
        
    }
    return (
    <button type="button" onClick={handleGoogleClick} className="bg-red-600 p-2 rounded-lg text-white
    hover:opacity-95">
        Continue with google
    </button>
  )
}
