var firebaseConfig = {
    apiKey: "AIzaSyA-AEBnv4hEYvOgWpqlFvZlhi2Zpmu62yE",
    authDomain: "kwitter-c3025.firebaseapp.com",
    databaseURL: "https://kwitter-c3025-default-rtdb.firebaseio.com",
    projectId: "kwitter-c3025",
    storageBucket: "kwitter-c3025.appspot.com",
    messagingSenderId: "239908477884",
    appId: "1:239908477884:web:1416af61353c7e2ada29b9"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function Logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";    
}
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});    
}
