import { Link } from "react-router-dom";

import { MyProjects } from "../MyProjects";
import { Header, Footer } from "../Header_Footer";
import "./style.scss";

export function Projetos() {
  
  return (
    <>
      <Header />
      <div className="AppProjetos">
        <header>
          <h1>Meus Projetos</h1>
          <button><Link className="Link" to="/Projetos">Criar projeto</Link></button>
        </header>
        <MyProjects  />
      </div>
      <Footer />
    </>
  )
    
}