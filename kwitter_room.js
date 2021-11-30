

  // Your web app's Firebase configuration
  // Your web app's Firebase configuration
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
document.getElementById("Welcome").innerHTML="welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+"onlick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code 
    });});}
getData();
function log_out(){
window.location="index.html";
}

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"  
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name){
localStorage.setItem("room_name",name);  
window.location="kwitter_page.html";
}