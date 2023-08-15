 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getDatabase ,ref , set  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyC7zh6TMhENRTmH33CYiiWA2WdQ3ZyslB8",
   authDomain: "contact-list-project-7cd3e.firebaseapp.com",
   databaseURL: "https://contact-list-project-7cd3e-default-rtdb.firebaseio.com",
   projectId: "contact-list-project-7cd3e",
   storageBucket: "contact-list-project-7cd3e.appspot.com",
   messagingSenderId: "25095560904",
   appId: "1:25095560904:web:dcb700a6562d98cb444ffd",
   measurementId: "G-SWDHR10C3T"
 };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const db = getDatabase(app);
console.log(db);
// get element reference

let user_image = localStorage.getItem('image')
let user_mailID = localStorage.getItem('emailID');
// Create function to save and upload user data in database
let Name = localStorage.getItem('Name');

upload.addEventListener('click',(e) =>
{
      
    // set object into rtdb
    set(ref(db,`/userDetails`),
    {
        firstName:first_name.value,
        lastName:last_name.value,
        label1:label_1.value,
        phoneNumber1:phone_number_1.value,
        label2:label_2.value,
        phoneNumber2:phone_number_2.value,
        eMail:email.value,
        birthDate:birthdate,
        noteText:note.value,
        userImage:user_image,
        userMailid:user_mailID
    });
    if (set !== null){
        console.log("data inserted ");
    }
    // // fname.value.trim();
    // // console.log(fname,last_name,label_1,phone_number_1,label_2,phone_number_2,email,birthdate,note,user_image,user_mailID);
  
    // console.log(first_name.value,user_image);
});
