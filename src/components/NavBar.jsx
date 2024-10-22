import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar({token, setToken}) {
    const navigate = useNavigate()
    
      return(
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink>Submit</NavLink>
        <NavLink>Sker</NavLink>
        <NavLink>Search Player</NavLink>
        
      </nav>
      )
    
  
    
  }
  
  export default NavBar;