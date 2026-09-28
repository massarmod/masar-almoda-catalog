// إعدادات Firebase لمشروع masar-almoda
const firebaseConfig = {
  apiKey: "AIzaSyAPiVaqeeMXmIZyv6FrqYFDEcMcxs1YrjE",
  authDomain: "masar-almoda.firebaseapp.com",
  projectId: "masar-almoda",
  storageBucket: "masar-almoda.firebasestorage.app",
  messagingSenderId: "275488318294",
  appId: "1:275488318294:web:0949100c9c1fcd81f22cf7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
