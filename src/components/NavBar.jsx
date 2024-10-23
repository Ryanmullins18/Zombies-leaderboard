import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar({token, setToken}) {
    const navigate = useNavigate()
    
      return(
      <nav>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink exact to="/leaderboards" activeClassName="active">Leaderboards</NavLink>
        <NavLink exact to="/submit" activeClassName="active">Submit</NavLink>
        <NavLink exact to="/sker" activeClassName="active">Sker</NavLink>
        <NavLink exact to="/search" activeClassName="active">Search Player</NavLink>
        <NavLink exact to="/profile" activeClassName="active">temp profile</NavLink>
        
      </nav>
      )
    
  
    
  }
  
  export default NavBar;