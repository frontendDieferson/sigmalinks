import { Link } from "react-router-dom";
import './login.css'
import { Logo } from "../../components/Logo";

export default function Login() {
  return (
    <div className="container-login">
      <Logo />
      <form className="container-form">
        <input className="input" placeholder="Digite Seu Email" type="text" />
        <input className="input" placeholder="Digite sua Senha" type="password" />
        <Link className="link" to="/admin">
          Acessar
        </Link>
      </form>
    </div>
  );
}
