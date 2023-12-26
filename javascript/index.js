  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth ,GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
      
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
   apiKey: "AIzaSyAhMWClfYkL6tXqxz__Qsh9YOJuLQmu938",
    authDomain: "contact-list-6c0b6.firebaseapp.com",
    projectId: "contact-list-6c0b6",
    storageBucket: "contact-list-6c0b6.appspot.com",
    messagingSenderId: "976760547893",
    appId: "1:976760547893:web:b7633b622a38f58fc95f7c",
    measurementId: "G-64M037352H""
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
