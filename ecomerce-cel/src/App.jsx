import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListConteiner } from "./components/ItemListConteiner";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";
import { ItemDetailConteiner } from "./components/ItemDetailConteiner";

function App() {
  

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path = "/" element={<ItemListConteiner greeting = "Ventas de celulares"/>}/>
      <Route path = "/categoria/:id" element={<ItemListConteiner greeting = "Productos"/>}/>
      <Route path = "/items/:id" element={<ItemDetailConteiner/> } />

    
    </Routes>
  
    </BrowserRouter>
  );
};

export default App
