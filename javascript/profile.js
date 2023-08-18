 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
//  import {  ref , set , push  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
 import { getFirestore, collection, addDoc ,doc , getDoc ,updateDoc }from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
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
update.style.display="none";
// Create function to save and upload user data in database
function InsertData()
{
    if (first_name.value != ""||last_name.value !=""||label_1.value !=""||phone_number_1.value !=""||label_2.value !=""||
    phone_number_2.value !=""||email.value !="" ||birthdate.value !=""||note.value !="")
    {   
        try 
        {
            const docRef = addDoc(collection(db, 'Userdetails'), {
                firstName:first_name.value,
                lastName:last_name.value,
                label1:label_1.value,
                phoneNumber1:phone_number_1.value,
                label2:label_2.value,
                phoneNumber2:phone_number_2.value,
                eMail:email.value,
                birthDate:birthdate.value,
                noteText:note.value,
                userImage:user_image,
                userMailid:user_mailID
            });
            console.log("Document written IN DATABASE ");
            alert("Data inserted Succesfully");
            first_name.value = "";
            last_name.value = "";
            label_1.value = "";
            phone_number_1.value = "";
            label_2.value = "";
            phone_number_2.value = "";
            email.value = "";
            birthdate.value =  "";
            note.value = "";
            user_image = "";
        }  
        catch (e) 
        {
            console.error("Error adding document: ", e);
        };
    } 
    else
    {
        alert("Please fill all the fields");
    }
}
upload.addEventListener('click',InsertData);
// insert function ends here
// get user id from url
const queryString = window.location.search;
const newstr = queryString.substring(1,queryString.length);
console.log(newstr);
//get data from user id from firestore
const docRef = doc(db, "Userdetails",newstr);
try 
{
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
        console.log(docSnap.data());
        let data = docSnap.data();
            first_name.value = `${data.firstName}`;
            last_name.value = `${data.lastName}`;
            label_1.value = `${data.label1}`;
            phone_number_1.value = `${data.phoneNumber1}`;
            label_2.value = `${data.label2}`;
            phone_number_2.value = `${data.phoneNumber2}`;
            email.value = `${data.eMail}`;
            birthdate.value = `${data.birthDate}`;
            note.value = `${data.noteText}`;
            const imgsrc = `${data.userImage}`;
            img002.src="data:image/jpg;base64,"+imgsrc;
            update.style.display="block";
            upload.style.display="none"
    } else {
        console.log("Document does not exist")
    }
} 
catch(error) 
{
    console.log(error)
}
function updateContact()
{
    const data =
    {
        firstName:first_name.value,
        lastName:last_name.value,
        label1:label_1.value,
        phoneNumber1:phone_number_1.value,
        label2:label_2.value,
        phoneNumber2:phone_number_2.value,
        eMail:email.value,
        birthDate:birthdate.value,
        noteText:note.value,
        userImage:user_image,
    }
    updateDoc(docRef, data)
    .then(docRef => 
    {
        console.log("A New Document Field has been added to an existing document");
        alert("Contact updated");
        window.location.href="contact.html"
    })
    .catch(error => 
    {
        console.log(error);
    });
}
update.addEventListener('click',updateContact);
