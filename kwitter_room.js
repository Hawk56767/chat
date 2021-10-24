

  // Your web app's Firebase configuration
  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyAKeP6texvg_c2ZaMMDrIWi31Ih6JEBAMw",
      authDomain: "kwitter-c02d4.firebaseapp.com",
      projectId: "kwitter-c02d4",
      storageBucket: "kwitter-c02d4.appspot.com",
      messagingSenderId: "605495991849",
      appId: "1:605495991849:web:6060ff58e890796ba1c638"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function log_out(){
window.location="index.html";
}
