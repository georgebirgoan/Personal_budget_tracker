//we make google auth with firebase
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../../firebase';
import { signInSuccess } from '../../redux/user/userSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './oAuth.scss';

export default function OAuth() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {currentUser}=useSelector(state=>state.user);
    console.log("user",currentUser);


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


            console.log("raasp",res);

            const data =await res.json();
            console.log('data auth',data);


            dispatch(signInSuccess(data));
            navigate("/");

        }catch(error){
            console.log('could not login with google', error);
            }
        
    }
    return (
        <>
    <div className="but">
        <button type="button" onClick={handleGoogleClick} className="google">
            Google
        </button>
    </div>
    </>
  )
}
