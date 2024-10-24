import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar({token, setToken}) {
    const navigate = useNavigate()
    
      return(
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/leaderboards">Leaderboards</NavLink>
        <NavLink to="/submit">Submit</NavLink>
        <NavLink to="/sker">Sker</NavLink>
        <NavLink to="/search">Search Player</NavLink>
        <NavLink to="/profile">temp profile</NavLink>
      </nav>
      )
    
  
    
  }
  
  export default NavBar;