import { Link } from "react-router-dom";
import { Header, Footer } from "../Header_Footer";

import "./style.scss";

export function Home() {
    
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>Bem vindo ao <span>costs</span> </h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <button><Link className="Link" to="/newproject">Criar projeto</Link></button>
        <img src="https://www.gesolar.com.br/pig-money.svg" alt="costs" />
      </div>
      <Footer />
    </div>
  );
  
 };
