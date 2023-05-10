
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD-71kr6FxT1lwRb9yD_x7TIxThS9W-otM",
    authDomain: "zee191135.firebaseapp.com",
    databaseURL: "https://zee191135-default-rtdb.firebaseio.com",
    projectId: "zee191135",
    storageBucket: "zee191135.appspot.com",
    messagingSenderId: "794552126089",
    appId: "1:794552126089:web:224d629354f09f5eeb9458",
    measurementId: "G-YWRSFWE6FX"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const database=getDatabase();
  
 
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const logButton = document.getElementById("login");
  
  const signupEmailIn = document.getElementById("e");
  const SignupUsernameIn = document.getElementById("u");
  const signupPasswordIn = document.getElementById("p");
  const Regbotton = document.getElementById("r"); 
  
  var email, password, signupEmail, signupPassword, signupUsername;

 Regbotton.addEventListener("click", function() {
    var isVerified = true;
  
    signupEmail = signupEmailIn.value;
    signupUsername = SignupUsernameIn.value;
    signupPassword = signupPasswordIn.value;

    
    if(signupEmail == null || signupUsername == null || signupPassword == null ) {
      window.alert("Please fill out all required fields.");
      isVerified = false;
    }
    
    if(isVerified) {
      createUserWithEmailAndPassword(auth,signupEmail, signupPassword)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        set(ref(database, 'Users/' + user.uid), {
          username:signupUsername,
          useremail:signupEmail 
          //userpassword: signupPassword
        })
        .then(() => {
          window.alert("Success! Account created.");
          // Data saved successfully!
        })
        .catch((error) => {
          window.alert("Error!!!plz try again.");
          // The write failed...
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        window.alert("Error occurred. Try again.");
      });
    }
  });
  
  logButton.addEventListener("click", function() {
    email = emailInput.value;
    console.log(email);
    password = passwordInput.value;
    console.log(password);
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Success! Welcome back!");
        window.alert("Success! Welcome.");
        window.location.assign("Fyp2.html");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error occurred. Try again.");
        window.alert("Error occurred. Try again.");
      });
  });
  
  




 

 

  
  


