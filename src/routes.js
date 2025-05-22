import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Locais from './Pages/Locais';
import Comidas from './Pages/Comidas';
import Pessoas from './Pages/Pessoas';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login/> } />
                <Route path="/locais" element={ <Locais/> } />
                <Route path="/comidas" element={ <Comidas/> } />
                <Route path="/pessoas" element={ <Pessoas/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;