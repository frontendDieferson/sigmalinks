import "./header.css";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";
import iconLogoFooter from '../../assets/SigmaDevIcon.png'
export function Header() {


  async function handleLogout() {
    await signOut(auth);
  }
  return (
    <div className="admin-header">
        <nav className="nav-header">
        <img src={iconLogoFooter} width='50px' />
          <ul>
            <li> <Link to='/'>Home</Link></li>
           
          </ul>
         
         
        <p>Bem vindo, Dieferson</p>

        <button onClick={handleLogout}>
          <BiLogOut size={28} color="#FFF" />
        </button>
        </nav>

    </div>
  );
}
