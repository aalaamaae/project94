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
    user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}