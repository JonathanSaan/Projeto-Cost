import { Link } from "react-router-dom";
import { Header, Footer } from "../Header_Footer";

import "./style.scss";

export function Newproject() {
  
  return (
    <div className="AppNewProject">
     <Header />
     <div>
      <h1>Criar projeto </h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <form>
        <label>Nome do projeto: </label>
        <input type="text" placeholder="Insira o nome do projeto"/>
        <label>Orçamento do projeto: </label>
        <input type="number" placeholder="Insira o orçamento total" />
        <label>Selecione a categoria: </label>
        <select> 
          <option disabled selected> 
          Selecione uma opção
          </option> 
          <option value="Infra"> 
          Infra
          </option> 
          <option value="Desenvolvimento"> 
          Desenvolvimento
          </option> 
          <option value="Design"> 
          Design
          </option> 
          <option value="Planejamento">
          Planejamento
          </option> 
        </select> 
      <button><Link className="Link" to="/projetos">Criar projeto</Link></button>
      </form>
     </div>
     <Footer />
    </div>
    )
}