// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
//  import {  ref , set , push  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { getFirestore, collection, onSnapshot, query ,doc , deleteDoc, updateDoc, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
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
  measurementId: "G-64M037352H"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const db = getFirestore(app);
console.log(db);
const auth = getAuth(app);
let user_mailID = localStorage.getItem('emailID');
const image = localStorage.getItem('photoURL');
userDetailImage.src=image;
const q = query(collection(db,`${user_mailID}`));
// let detail = contactdetails.innerHTML;

let fetchContact = 0;
const con = onSnapshot(q, (QuerySnapshot) => {
  fetchContact = [];
  QuerySnapshot.forEach((doc) => {
    fetchContact.push({ ...doc.data(), id: doc.id }); 
  });
  // function for show data 
  function showdata(){
    var html = "<div>"
    console.log('FetchContact', fetchContact);
    if(fetchContact == ""){
      noContactFound.style.display="block";
    }
    fetchContact.map((data) => {
      console.log(data.id);
      html += `<div class="card-2 contact" >`;
      html += `<div class="row">`;
      if(!data.userImage){
        const fName = `${data.firstName}`;
        const initials = fName.charAt(0);
        html += `<div class="col-3 col-lm-3"style="display:inline-flex;"><div id="profileImage" >${initials}</div>${data.firstName}</div>`;
      }
      else{
        html += `<div class="col-3 col-lm-3"><img src="data:image/jpg;base64,${data.userImage}" id="profilePic">
        ${data.firstName}</div>`;
      }
      html += `<div class="col col-sm-4" id='${data.id}' onclick="editcontact(this.id)">${data.phoneNumber1}</div>`;
      html += `<div class="col col-sm-2" id='${data.id}' onclick="editcontact(this.id)">${data.eMail}</div>`;
      html += `<div class="col col-sm-3">
      <img src="image/25.png" class="manu_list" id="menu"id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">    
      <div class="dropdown">
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><button type="button"class="dropdown-item btn btn-danger" id='${data.id}' onclick="deleteCon(this.id),snakBar()">Delete</button></li>
          <li><button type="button"class="dropdown-item" id='${data.phoneNumber1}' onclick="calNow(this.id)">Call</button></li>
        </ul>
      </div>
      <img src="image/15.png" class="edit" id='${data.id}' onclick="editcontact(this.id)">`;
      if (data.favourite==true) {
        html +=`<img src="image/star.png" class="fav_list" id='image-${data.id}' onclick="favourite(this.id)"></div>`;
      }
      else{
        html +=`<img src="image/21.png" class="fav_list" id='image-${data.id}' onclick="favourite(this.id)"></div>`;
      }
      html += '</div></div>';
    })
    document.getElementById("contactDetails").innerHTML = html;
    //  console.log(dataCon.favourite==true);
  }

 showdata()
});
// function for delete 
function deleteCon(id){
const docRef = doc(db, `${user_mailID}`, id);
deleteDoc(docRef)
.then(() => {
    console.log("Entire Document has been deleted successfully.");
})
.catch(error => {
    console.log(error);
})
 }
 //when delete any contact this message will diaplay
 function snakBar(){
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
 }
 // function for favourite buttton
function favourite(id){
  console.log("Favorite clicked",id);
  document.getElementById(`${id}`).src="image/star.png";
  const userid = id.substring(6,id.length);
  let docRef = doc(db, `${user_mailID}`,userid);
  const data = {favourite:true}
  updateDoc(docRef, data)
  .then(docRef => 
  {
    console.log("this contact has been added in favourite");
  })
  .catch(error => 
  {
      console.log(error);
  });
 }
 // log out fuccntion start 
document.getElementById('logoutbtn').onclick=()=>{
  let choice=window.confirm('Are you sure to logout !')
  if (choice) {
    signOut(auth).then(() => {
      window.location.href=('index.html');
      const keys =Object.keys(localStorage);
      for(const key of keys){
        localStorage.removeItem(key);
      }
      window.location.href=('index.html');

    }).catch((error) => {
      // An error happened.
    });

  }

  alert("You are Log-out now ");
}
 window.favourite = favourite;
 window.deleteCon = deleteCon;
 window.snakBar = snakBar;
