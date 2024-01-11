import {Link } from "react-router-dom";
import { AuthChecker } from "../utils/general_utils";



function About() {
    return ( 
        <div id="about-page">
            <nav className="navbar">
                <h1>registerERR</h1>
                <div className="links">
                    <AuthChecker/>
                    <Link to="/edit" className="link"><h3>Edit</h3></Link>
                </div>
            </nav>
            <h1>About</h1>
            <p>registerERR is a simple registration form for events. It is built using ReactJS and Firebase.</p>
            <p>It is open source and can be found on <a href="https://github.com/DevanshuSawant/registerERR_WEBSITE">GitHub</a>.</p>
        </div>
     );
}

export default About;