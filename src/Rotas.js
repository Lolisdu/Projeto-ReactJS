import React from 'react';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './views/Home';
import AddCadastro from './views/AddCadastro';
import EditCadastro from './views/EditCadastro';
import ViewCadastro from './views/ViewCadastro';

export default function Rotas() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path= "/home" element= {<Home/>}/>
            <Route path= "/add" element= {<AddCadastro/>}/>
            <Route path= "/edit/:id" element= {<EditCadastro/>}/>
            <Route path= "/view/:id" element= {<ViewCadastro/>}/>
            <Route path= "*" element={<h1> Página não encontrada.</h1>}/>
        </Routes>
    </Router>
  )
}
