
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
 

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBkOj969kVZ9iMvBjIPGZOS0c2rZOv3sJ4",
    authDomain: "creativetutorial-f5c1d.firebaseapp.com",
    projectId: "creativetutorial-f5c1d",
    storageBucket: "creativetutorial-f5c1d.appspot.com",
    messagingSenderId: "45069422568",
    appId: "1:45069422568:web:9cf2df7f904c584f019e5d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //get ref to database services
  const db = getDatabase (app);

  document.getElementById("submit").addEventListener('click' , function(e){
    set(ref(db, 'user/' + document.getElementById("username").value),
    {
      
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        PhoneNumber: document.getElementById("phone").value,

        
    });

    alert("login Sucessful !");

  });
