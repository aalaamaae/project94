var firebaseConfig = {
      apiKey: "AIzaSyDp2KP7szzirKdVL7fck2nuqpOVDA1LqfM",
      authDomain: "kwitter-2befc.firebaseapp.com",
      databaseURL: "https://kwitter-2befc-default-rtdb.firebaseio.com",
      projectId: "kwitter-2befc",
      storageBucket: "kwitter-2befc.appspot.com",
      messagingSenderId: "536618681695",
      appId: "1:536618681695:web:642b88ed51f70bb89ca2ea",
      measurementId: "G-PX0ZFSZ5BQ"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id"+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
