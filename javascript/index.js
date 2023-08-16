  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth ,GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
      
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC7zh6TMhENRTmH33CYiiWA2WdQ3ZyslB8",
    authDomain: "contact-list-project-7cd3e.firebaseapp.com",
    projectId: "contact-list-project-7cd3e",
    storageBucket: "contact-list-project-7cd3e.appspot.com",
    messagingSenderId: "25095560904",
    appId: "1:25095560904:web:dcb700a6562d98cb444ffd",
    measurementId: "G-SWDHR10C3T"
  };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 console.log(app);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 glogin.addEventListener('click',(e)=>{
     signInWithPopup(auth, provider)
         .then((result) => {
             // This gives you a Google Access Token. You can use it to access the Google API.
             const credential = GoogleAuthProvider.credentialFromResult(result);
             const token = credential.accessToken;
             // The signed-in user info.
             const user = result.user;
             //User name = displayName
            // email = email
             //photo = photoURl
             //redirect     
             console.log("User Log in");
             localStorage.setItem("Name",user.displayName);
             localStorage.setItem("emailID",user.email);
             localStorage.setItem("photoURL",user.photoURL);
             alert("User Login : "+user.displayName);
            window.location.href = "contact.html"
             // IdP data available using getAdditionalUserInfo(result)
             // ...
         }).catch((error) => {
             // Handle Errors here.
             const errorCode = error.code;
             const errorMessage = error.message;
             // The email of the user's account used.
             const email = error.customData.email;
             // The AuthCredential type that was used.
             const credential = GoogleAuthProvider.credentialFromError(error);
             // ...
             alert(errorMessage);
         });
 });