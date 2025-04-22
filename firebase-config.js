// Firebase configuration
const firebaseConfig = {
// Insert firebase config
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign in with Google
function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log("User signed in:", user);
      alert("Signed in successfully!");
    })
    .catch((error) => {
      console.error("Error signing in:", error);
      alert("Error signing in. Please try again.");
    });
}