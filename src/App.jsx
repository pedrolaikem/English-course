import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Sobre from "./Pages/Sobre/Sobre"
import Contato from "./Pages/Contato"
import Matricula from "./Pages/Matricula/Matricula"

function App () {
    return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sobre" element={<Sobre />}/>
                <Route path="/contato" element={<Contato />}/>  
                <Route path="/faça-sua-matricula" element={<Matricula />}/>  
            </Routes>
        </BrowserRouter>
        
    </div>
    
    )
    

}
export default App