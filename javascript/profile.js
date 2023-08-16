 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
//  import {  ref , set , push  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
 import { getFirestore, collection, addDoc }from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
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
const db = getFirestore(app);
console.log(db);
// get element reference

let user_image = localStorage.getItem('image')
let user_mailID = localStorage.getItem('emailID');
// Create function to save and upload user data in database

function InsertData()
{
    try 
    {
        const docRef = addDoc(collection(db, `${user_mailID}`), {
            firstName:first_name.value,
            lastName:last_name.value,
            label1:label_1.value,
            phoneNumber1:phone_number_1.value,
            label2:label_2.value,
            phoneNumber2:phone_number_2.value,
            eMail:email.value,
            // birthDate:birthdate,
            noteText:note.value,
            userImage:user_image,
            userMailid:user_mailID
        });
        console.log("Document written with ID: ", `${docRef.id}`);
        alert("Data inserted Succesfully");
        window.location.href = '';
        // first_name.value = "";
        // last_name.value = "";
        // label_1.value = "";
        // phone_number_1.value = "";
        // label_2.value = "";
        // phone_number_2.value = "";
        // email.value = "";
        // birthdate.value =  "";
        // note.value = "";
        // user_image = "";
    } 
    catch (e) 
    {
        console.error("Error adding document: ", e);
    }
    //    // set object into rtdb
    //  ref(db,"/Userdetails".push({
    //    
        
    // }))
   
    // set(ref(db,"/UserDetails"),
    // {
     
//     // })
//     const postsRef = ref(db,"/DIVYESH");
//     // const newPostRef = postsRef.push();
//     // newPostRef.set({
//     //   author: 'gracehop',
//     //   title: 'Announcing COBOL, a New Programming Language'
//     // });
//    console.log(postsRef); 
    // // we can also chain the two calls together
    // postsRef.push().set({
    //   author: 'alanisawesome',
    //   title: 'The Turing Machine'
    // });
    // .then(() =>{
    //     alert("Data inserted Succesfully");
    //     first_name.value = "";
    //     last_name.value = "";
    //     label_1.value = "";
    //     phone_number_1.value = "";
    //     label_2.value = "";
    //     phone_number_2.value = "";
    //     email.value = "";
    //     birthdate.value =  "";
    //     note.value = "";
    //     user_image = "";
    // })
    // .catch((error) =>{
    //     alert("Unsuccessful "+error);
    // })
}
upload.addEventListener('click',InsertData);