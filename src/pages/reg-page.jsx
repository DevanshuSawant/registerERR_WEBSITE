import { signInWithGoogle, event, db, setDoc, doc, serverTimestamp } from '../utils/firebase.js';
import { useNavigate, Link } from 'react-router-dom';


function App() {
  let authEmail = localStorage.getItem('email');
  const navigate = useNavigate();

  function handleSignIn() {
    if (authEmail) {
      setDoc(doc(db, event, authEmail), {
        gmail: authEmail,
        reg_no: parseInt(localStorage.getItem('reg_no')),
        name: localStorage.getItem('name'),
        branch: localStorage.getItem('branch'),
        batch_no: parseInt(localStorage.getItem('batch_no')),
        year: parseInt(localStorage.getItem('year')),
        roll_no: parseInt(localStorage.getItem('roll_no')),
        smart_card_no: localStorage.getItem('smart_card_no'),
        msteams_mail: localStorage.getItem('msteams_mail'),
        phone_no: parseInt(localStorage.getItem('phone_no')),
        batch_roll_no: localStorage.getItem('batch_roll_no'),
        reg_time: serverTimestamp()
      });
      console.log(authEmail);
      console.log("Registered Without Google");
      navigate('/success');
      window.location.href = "/success";

    } else {
      signInWithGoogle("/success");
      console.log("Registered With Google");
      
    }

  }

  function editData() {
    if (authEmail) {
      navigate('/edit');
      window.location.href = "/edit";
    }
    else {
      signInWithGoogle("/edit");

    }
  }
  

  return (
    <div className="App">
      <nav className="navbar">
        <h1>registerERR</h1>
        <div className="links">
          <Link to="/about" className="link"><h3>About</h3></Link>
        </div>
      </nav>
      <div className="regpage-container">
      <button onClick={handleSignIn}>Register For {event} </button>
      <button onClick={editData}>Edit Your Details</button>
      </div>
    </div>
  );
}

export default App;
