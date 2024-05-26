// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging,getToken } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNojxBHXK-xJ-PLv-2pdDHwmSnsFU1RGI",
  authDomain: "budgetgeorge-991d6.firebaseapp.com",
  projectId: "budgetgeorge-991d6",
  storageBucket: "budgetgeorge-991d6.appspot.com",
  messagingSenderId: "1012385694066",
  appId: "1:1012385694066:web:ad1c5c8bf7b06367521deb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);



export const generateToken= async ()=>{
  //console.log('generate')
  const permission=await Notification.requestPermission();
//  console.log("permis",permission);
  
  if(permission === "granted"){
    const token=await getToken(messaging,{
      vapidKey:"BNEfndX9g8tOIav1quVcHuLN5z-KPtwiEtOObjWfxSxGdsgcLvPPkN7qlKt4eotaSQNBOPAmND4eRG6LSM5J6Cg"
      })
     // console.log(token);
  }
  

}