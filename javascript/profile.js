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

var user_image = localStorage.getItem('image');
let user_mailID = localStorage.getItem('emailID');
updateCon.style.display="none";

// upload click event
upload.addEventListener('click',function(e) {
    e.preventDefault();
    checkData();
});
// check data validation
function checkData(){
let fname = first_name.value;
let lname  = last_name.value;
let label1 = label_1.value;
let number1 = phone_number_1.value;
let label2 = label_2.value;
let number2 = phone_number_2.value;
let Email = email.value;
let bdate = birthdate.value;
let notetext = note.value;
    let isValid = true;
    if(fname.trim()  === ""){

        isValid = false;
        error1.textContent = "*This field is required";
        first_name.style.borderColor = "red"
    }
    else{
        error1.textContent = "";
        first_name.style.borderColor = "initial";
      
    }
    if(lname.trim() === ""){
        isValid = false;
        error2.textContent = "*This field is required";
        last_name.style.borderColor = "red"
    }
    else{
        error2.textContent = "";
        last_name.style.borderColor = "initial";
    }
    if(label1.trim() === ""){
        isValid = false;
        error3.textContent = "*This field is required";
        label_1.style.borderColor = "red"
    }
    else{
        error3.textContent = "";
        label_1.style.borderColor = "initial";
    }
    if(number1.trim() === ""){
        isValid = false;
        error4.textContent = "*This field is required";
        phone_number_1.style.borderColor = "red"
    }
    else{
        error4.textContent = "";
        phone_number_1.style.borderColor = "initial";
    }
    if(label2.trim() === ""){
        isValid = false;
        error5.textContent = "*This field is required";
        label_2.style.borderColor = "red"
    }
    else{
        error5.textContent = "";
        label_2.style.borderColor = "initial";
    }
    if(number2.trim() === ""){
        isValid = false;
        error6.textContent = "*This field is required";
        phone_number_2.style.borderColor = "red"
    }
    else{
        error6.textContent = "";
        phone_number_2.style.borderColor = "initial";
    }
    if(Email.trim() === ""){
        isValid = false;
        error7.textContent = "*This field is required";
        email.style.borderColor = "red"
    }
    else{
        error7.textContent = "";
        email.style.borderColor = "initial";
    }
    if(bdate.trim() === ""){
        isValid = false;
        error8.textContent = "*This field is required";
        birthdate.style.borderColor = "red"
    }
    else{
        error8.textContent = "";
        birthdate.style.borderColor = "initial";
    }
    if(notetext.trim() === ""){
        isValid = false;
        error9.textContent = "*This field is required";
        note.style.borderColor = "red"
    }
    else{
        error9.textContent = "";
        note.style.borderColor = "initial";
    }
    if (isValid) {
        InsertData();
    }
}
// Create function to save and upload user data in database

function InsertData()
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
        }  
        catch (e) 
        {
            console.error("Error adding document: ", e);
            alert("Error adding document: ", e)
        };
    } 

//insert function ends here
// get user id from url
const queryString = window.location.search;
const newstr = queryString.substring(1,queryString.length);
console.log(newstr);
if (newstr != null){
    loader.style.display="none";
}
//get data from user id from firestore
let docRef = doc(db, "Userdetails",newstr);
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
            updateCon.style.display="block";
            upload.style.display="none"
    } else {
        console.log("Document does not exist");
        alert("Document does not exist");
        window.location.href="contact.html";
    }
} 
catch(error) 
{
    console.log(error)
}
// update data in firestore
function updateContact()
{
    console.log("funaction cliked");
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
        userImage:user_image
    }
    console.log(data);
    updateDoc(docRef, data)
    .then(docRef => 
    {
        console.log("A New Document Field has been added to an existing document");
        alert("Contact updated");
        window.location.href="contact.html";
    })
    .catch(error => 
    {
        console.log(error);
    });
}
updateCon.addEventListener('click',updateContact);
