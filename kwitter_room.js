
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDiYH4h0U9HpThO6xVidVsJn7j-IqhB_2Q",
      authDomain: "web-chat-app-47edc.firebaseapp.com",
      databaseURL: "https://web-chat-app-47edc-default-rtdb.firebaseio.com",
      projectId: "web-chat-app-47edc",
      storageBucket: "web-chat-app-47edc.appspot.com",
      messagingSenderId: "79468030601",
      appId: "1:79468030601:web:06996dc9a36a51844a7458"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+username+" !";
function addroom()
{
      room=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname",room);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}