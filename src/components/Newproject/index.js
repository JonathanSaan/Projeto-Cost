import { Header, Footer } from "../Header_Footer";

import "./style.scss";

export function Newproject() {
  return (
    <div className="AppProject">
     <Header />
     <div>
      <h1>Criar projeto </h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
     </div>
     <Footer />
    </div>
    )
}