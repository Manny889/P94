const firebaseConfig = {
    apiKey: "AIzaSyD858z6MFsotaiOPDLpI0Rlz53ln0_eNNo",
    authDomain: "kwitterp94.firebaseapp.com",
    projectId: "kwitterp94",
    storageBucket: "kwitterp94.appspot.com",
    messagingSenderId: "393894697184",
    appId: "1:393894697184:web:4889cb7992c54fc49c1885",
    measurementId: "G-BFYVK7HYKT"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function ADDROOM() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose = "Adding Room"    
})
}
function logout() {
window.location = "index.html"
}

  