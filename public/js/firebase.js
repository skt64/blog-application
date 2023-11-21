var firebaseConfig = {
    apiKey: "AIzaSyCQmC6MIvfkjbTVbYrcJTZFuW8PtdFaDoo",
    authDomain: "blogging-website-e53da.firebaseapp.com",
    projectId: "blogging-website-e53da",
    storageBucket: "blogging-website-e53da.appspot.com",
    messagingSenderId: "598193292046",
    appId: "1:598193292046:web:c9d7da0f3bf09a31138d5f"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
  auth.signOut();
  location.reload();
}


