import {NavLink} from "react-router-dom"
import "./NavBar.css"


function NavBar(){
    return(
        <nav>
            <NavLink to="/" className="nav-link">NavBar.js nav tag Home page</NavLink> 
            <NavLink to="/about" className="nav-link">NavBar.js nav tag About page</NavLink>
            <NavLink to="/login" className="nav-link">NavBar.js nav tag Login Page</NavLink>
        </nav>
    )
}

export default NavBar