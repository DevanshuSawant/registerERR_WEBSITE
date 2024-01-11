import { Link } from "react-router-dom";

function AuthChecker() {
    if (localStorage.getItem('email') == null) {
        return ( 
            <Link to="/" className="link"><h3>Register</h3></Link>
        );
    }
    else {
        return ( 
            <Link to="/success" className="link"><h3>Unregister</h3></Link>
        );
    } 
}

export {AuthChecker};