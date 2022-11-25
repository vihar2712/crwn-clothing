import {initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBkzIZs9wTrwDzg6Tfe-gblsvlkZUBMw-E",
    authDomain: "crwn-clothing-db-3a270.firebaseapp.com",
    projectId: "crwn-clothing-db-3a270",
    storageBucket: "crwn-clothing-db-3a270.appspot.com",
    messagingSenderId: "739274145784",
    appId: "1:739274145784:web:02024302643876bd28e00d"
  };
  
  // Initialize Firebase
  const FirebaseAppInstance = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:'select_account'
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider);

  export const db = getFirestore(); // db points directly to the databse stored in Firebase

  export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
   
    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt  = new Date();

        try {
            await setDoc(userDocRef,{displayName,email,createdAt})
        } catch (error) {
            console.log('error is',error.message);
            
        }
    }
    return userDocRef;
  }