import {Link } from "react-router-dom";
import {event} from '../utils/firebase.js';

const SuccessPage = () => {

  function unRegister() {
    localStorage.clear();
    window.location.href = "/";
  }
  return ( 
    <div className="success-page">
      <nav className="navbar">
        <h1>registerERR</h1>
        <div className="links">
          <Link to="/about" className="link"><h3>About</h3></Link>
          <Link to="/edit" className="link"><h3>Edit</h3></Link>
        </div>
      </nav>
      <h1>Registration Successful</h1>
      <p>Thank you for registering with us. You can now close this tab.</p>
      <button onClick={unRegister}>Unregister From {event}</button>
    </div>
   );
}
 
export default SuccessPage;