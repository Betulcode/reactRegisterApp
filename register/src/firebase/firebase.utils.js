import firebase from "firebase/app"
import "firebase/auth"
const devConfig={
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN ,
  databaseURL:process.env.REACT_APP_DATABASEURL,
  projectId:process.env.REACT_APP_PROJECTID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID, 
  appId:process.env.REACT_APP_APP_ID ,
  measurementId:process.env.REACT_APP_MEASUREMENT_ID 
};

const proConfig=()=>{};

const config= process.env.NODE_ENV === "development" ? devConfig : proConfig;

class Firebase{
    constructor(){
        firebase.initializeApp(config);
        this.firebaseAuth= firebase.auth();
        console.log("this.firebaseAuth=" ,this.firebaseAuth)
    }


}
    
export default new Firebase() ;

