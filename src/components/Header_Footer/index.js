import { Link } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import "./style.scss";

export function Header() {
  
  return (
      <header className="App-header">
        <img src="https://cdn-icons-png.flaticon.com/512/2933/2933116.png" alt="cost" />
       <ul>
          <li><Link className="Link" to="/">Home</Link></li> 
          <li><Link className="Link" to="/Projetos">Projetos</Link></li> 
          <li><Link className="Link" to="/Empresa">Empresa</Link></li>
          <li><Link className="Link" to="/Contato">Contato</Link></li>
       </ul>
      </header>
    )
    
}

export function Footer() {
  
  return (
    <footer>
        <main>
          <ul>
            <li><MdFacebook size={25} color="#FFF" onMouseOver={({target})=>target.style.color="#F9A826"} onMouseOut={({target})=>target.style.color="#FFF"} /></li>
            <li><FaInstagram size={25} color="#FFF" onMouseOver={({target})=>target.style.color="#F9A826"} onMouseOut={({target})=>target.style.color="#FFF"} /></li>
            <li><FaLinkedin size={25} color="#FFF" onMouseOver={({target})=>target.style.color="#F9A826"} onMouseOut={({target})=>target.style.color="#FFF"} /></li>
          </ul>
          <p><span>Costs</span> &copy; 2022</p>
        </main>
      </footer>
    )
    
}