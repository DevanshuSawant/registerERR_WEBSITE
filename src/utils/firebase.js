import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc,getDoc,getFirestore,serverTimestamp  } from "firebase/firestore/lite"; 



const firebaseConfig = {
    apiKey: "AIzaSyB8gCi7gPDFYl-FguhN5l1B1D1hxTHwHwU",
    authDomain: "registererr-b9db1.firebaseapp.com",
    databaseURL: "https://registererr-b9db1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "registererr-b9db1",
    storageBucket: "registererr-b9db1.appspot.com",
    messagingSenderId: "464975890039",
    appId: "1:464975890039:web:f449f7f6e78930d4a2a872"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const event = "EVENT1";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async (redirectLocation) => {
    try {
        await signInWithPopup(auth, provider)
        .then(async (result) => {
            const userRef = doc(db, 'STDATA', auth.currentUser.email);
            const userSnap = await getDoc(userRef);
            console.log(userSnap.data());
            if (userSnap.exists()) {
            const userRef = doc(db, 'STDATA', auth.currentUser.email);
            setDoc(userRef, { uid: auth.currentUser.uid }, { merge: true });
            setDoc(doc(db, event, auth.currentUser.email), {
                gmail: auth.currentUser.email,
                reg_no: userSnap.data().reg_no,
                name: userSnap.data().name,
                branch: userSnap.data().branch,
                roll_no: userSnap.data().roll_no,
                smart_card_no: userSnap.data().smart_card_no,
                msteams_mail: userSnap.data().msteams_mail,
                phone_no: userSnap.data().phone_no,
                batch_roll_no: userSnap.data().batch_roll_no,
                reg_time: serverTimestamp(),
                batch_no: userSnap.data().batch_no,
                year: userSnap.data().year,
            });
            localStorage.setItem("email", auth.currentUser.email);
            localStorage.setItem("uid", auth.currentUser.uid);
            localStorage.setItem("name", userSnap.data().name);
            localStorage.setItem("reg_no", userSnap.data().reg_no);
            localStorage.setItem("branch", userSnap.data().branch);
            localStorage.setItem("roll_no", userSnap.data().roll_no);
            localStorage.setItem("smart_card_no", userSnap.data().smart_card_no);
            localStorage.setItem("msteams_mail", userSnap.data().msteams_mail);
            localStorage.setItem("phone_no", userSnap.data().phone_no);
            localStorage.setItem("batch_roll_no", userSnap.data().batch_roll_no);
            localStorage.setItem("batch_no", userSnap.data().batch_no);
            localStorage.setItem("year", userSnap.data().year);

            //     console.log("Registered for "+event);
            window.location.replace(redirectLocation);

            //     }
            } else {
            console.log("No such user!");
            //redirect to signup page
            }
            
        }).catch((error) => {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
}




export { signInWithGoogle, auth, db, event, setDoc, doc, serverTimestamp, getDoc };