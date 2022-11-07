import "./logo.css";
import loginSigmadev from "../../assets/loginSigmadev.png";
import { Link } from "react-router-dom";
export function Logo() {
  return (
    <div>
      <Link to='/'>
        <img src={loginSigmadev}></img>
      </Link>
    </div>
  );
}
