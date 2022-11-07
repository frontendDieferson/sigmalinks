import "./logo.css";
import loginSigmadev from "../../assets/loginSigmadev.png";
import { Link } from "react-router-dom";
export function Logo() {
  return (
    <div className="container-logo">
      <Link>
        <img className="logo" src={loginSigmadev}></img>
      </Link>
    </div>
  );
}
