import { VscEdit } from "react-icons/vsc";
import { BsFillTrashFill } from "react-icons/bs";

export function MyProjects() {
  
  return (
        <div className="newproject">
          <h1 className>Titulo</h1>
          <h2>Orçamento: </h2>
          <p className="Categoria">Categoria</p>
          <button><span><VscEdit size={10}/></span>Editar</button>
          <button><span><BsFillTrashFill size={10}/></span>Excluir</button>
        </div>
    )
    
}