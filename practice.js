
   var firebaseConfig = {
    apiKey: "AIzaSyDQrmC6-As1xs9ym7SBL7jPxEp0m3NNrEs",
    authDomain: "kwitter-bc57d.firebaseapp.com",
    databaseURL: "https://kwitter-bc57d-default-rtdb.firebaseio.com",
    projectId: "kwitter-bc57d",
    storageBucket: "kwitter-bc57d.appspot.com",
    messagingSenderId: "934073008975",
    appId: "1:934073008975:web:36882f8486e09d419d3b3a",
    measurementId: "G-7E69RSF13X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"

      });

  }