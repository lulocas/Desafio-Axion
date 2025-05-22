import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Locais from './Pages/Locais';
import Comidas from './Pages/Comidas';
import Pessoas from './Pages/Pessoas';
import RotaProtegida from "./Components/RotaProtegida";


function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/locais" element={<RotaProtegida><Locais /></RotaProtegida>} />
                <Route path="/comidas" element={<RotaProtegida><Comidas /></RotaProtegida>} />
                <Route path="/pessoas" element={<RotaProtegida><Pessoas /></RotaProtegida>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;