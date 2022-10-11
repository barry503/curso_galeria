
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Aurora from './components/Aurora';
import Beach from './components/Beach';
import Forest from './components/Forest';
import Jungle from './components/Jungle';
import Lake from './components/Lake';
import Milky from './components/Milky';

import Navegacion from './components/Navegacion';



function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <h1 className='text-center mt-3 mb-3'><b className='text-secondary'>Gray</b> Galeria</h1>
    </div>
      <Routes>
      <Route path='/Aurora' element={<Aurora />}   />
      <Route path="/Beach" element={<Beach />}  />
      <Route path="/Forest" element={<Forest />}  />
      <Route path="/jungle" element={<Jungle />}  />
      <Route path="/lake" element={<Lake />}  />
      <Route path="/milky" element={<Milky />}  />
      
      
      </Routes>
      <Navegacion/>
    </BrowserRouter>
  );
}

export default App;
