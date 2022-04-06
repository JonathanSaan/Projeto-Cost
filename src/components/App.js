import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { Newproject } from "./Newproject";
import { Projetos } from "./Projetos";
import { Empresa } from "./Empresa";
import { Contato } from "./Contato";

function App() {
  return (
   <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/newproject' element={<Newproject />} />
        <Route path='/Projetos' element={<Projetos />} />
        <Route path='/Empresa' element={<Empresa />} />
        <Route path='/Contato' element={<Contato />} />
      </Routes>
    </Router>
    )
}

export default App;
