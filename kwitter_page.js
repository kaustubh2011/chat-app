//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCkK1pDcuyFTroEYUT2PjbX4g0pzTAx38g",
      authDomain: "kwitter-5ed74.firebaseapp.com",
      databaseURL: "https://kwitter-5ed74-default-rtdb.firebaseio.com",
      projectId: "kwitter-5ed74",
      storageBucket: "kwitter-5ed74.appspot.com",
      messagingSenderId: "5412038419",
      appId: "1:5412038419:web:a5d0dc55028096202fdce6"
    };
    // Initialize Firebase 
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    roomname=localStorage.getItem("roomname");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(roomname).push({
                name:username,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}