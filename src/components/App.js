import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import "./style.scss"

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://cdn-icons-png.flaticon.com/512/2933/2933116.png" alt="cost" />
       <ul>
          <li> Home </li> 
          <li> Projetos </li> 
          <li> Empresa </li> 
          <li> Contato </li> 
       </ul>
      </header>
      <div className="container">
        <h1>Bem vindo ao <span>costs</span> </h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <button>Criar projeto</button>
        <img src="https://www.gesolar.com.br/pig-money.svg" alt="costs" />
      </div>
      <footer>
        <main>
          <ul>
            <li><MdFacebook size={25} color="#FFF" onMouseOver={({target})=>target.style.color="#F9A826"} onMouseOut={({target})=>target.style.color="#FFF"} /></li>
            <li><FaInstagram size={25} color="#FFF" onMouseOver={({target})=>target.style.color="#F9A826"} onMouseOut={({target})=>target.style.color="#FFF"} /></li>
            <li><FaLinkedin size={25} color="#FFF" onMouseOver={({target})=>target.style.color="#F9A826"} onMouseOut={({target})=>target.style.color="#FFF"} /></li>
          </ul>
          <p>Costs <span> &copy; 2022 </span></p>
        </main>
      </footer>
    </div>
  );
}

export default App;
