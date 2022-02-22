
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCCiHiHtML_CSOirpE9-rvkl42NXvhan9M",
      authDomain: "kwitter-89607.firebaseapp.com",
      databaseURL: "https://kwitter-89607-default-rtdb.firebaseio.com",
      projectId: "kwitter-89607",
      storageBucket: "kwitter-89607.appspot.com",
      messagingSenderId: "340602586440",
      appId: "1:340602586440:web:1deadad9032813a05adf7d"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom(){
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      })

      localStorage.setItem("room_name",room_name)

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name" + Room_names)

      row = "<div class = 'room_name' id =" + Room_names + " onclick ='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>"

      document.getElementById("output").innerHTML += row 

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}