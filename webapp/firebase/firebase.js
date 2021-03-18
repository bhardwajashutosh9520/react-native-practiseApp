import * as firebase from 'firebase'  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD3WYVHgvFZlrTPD9TenRvXDHaPCoif270",
    authDomain: "allo-burait.firebaseapp.com",
    databaseURL: "https://allo-burait-default-rtdb.firebaseio.com",
    projectId: "allo-burait",
    storageBucket: "allo-burait.appspot.com",
    messagingSenderId: "987927539325",
    appId: "1:987927539325:web:bb06bed2e6e3766d070b14"
  };
  // Initialize Firebase
  var firebaseDb = firebase.initializeApp(firebaseConfig);

  export default firebaseDb.database().ref()