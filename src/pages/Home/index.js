import "./home.css";
import { SocialMedia } from "../../components/SocialMedia"; 
import { FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa'
export default function Home() {
  return (
    <div className="home-container">
      <h1>Dieferson Soares</h1>
      <span>Veja meus links 👇</span>
      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">Algum link qualquer</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Algum link qualquer</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Algum link qualquer</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Algum link qualquer</p>
          </a>
        </section>
        <footer>
          <SocialMedia url='https://twitter.com/diefpontotsx'>
            <FaTwitter size={24} color="#FFF" />
          </SocialMedia>
          <SocialMedia url='https://instagram.com/sigmadev'>
            <FaInstagram size={24} color="#FFF" />
          </SocialMedia>
          <SocialMedia url='https://twitch.com/diefersonnoobmaster'>
            <FaTwitch size={24} color="#FFF" />
          </SocialMedia>
        </footer>
      </main>
    </div>
  );
}
