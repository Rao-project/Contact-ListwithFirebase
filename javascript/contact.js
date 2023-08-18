 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
//  import {  ref , set , push  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
 import { getFirestore, collection,onSnapshot,query }from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
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

const q = query(collection(db, "/Userdetails"))
// let detail = contactdetails.innerHTML;
const con = onSnapshot(q, (QuerySnapshot) => {
    const fetchContact = [];
    QuerySnapshot.forEach((doc) => 
    {
        fetchContact.push({ ...doc.data(), id: doc.id });
    });
    var html = "<div>"
    console.log('FetchContact', fetchContact);
    fetchContact.map((data) =>
    {
      console.log(data.id);
      html += `<div class="card-2" id='${data.id}' onclick="editcontact(this.id)">`;
      html += '<div class="row">';
      html += `<div class="col">${data.firstName}</div>`;
      html += `<div class="col">${data.phoneNumber1}</div>`;
      html += `<div class="col"><img src="image/25.png" class="manu_list"><img src="image/15.png"class="edit"><img src="image/21.png" class="fav_list" ></div>`;
      html += '</div></div>';
   
    })
    document.getElementById("contactDetails").innerHTML = html;
});
