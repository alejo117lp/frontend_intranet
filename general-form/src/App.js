import './App.css';
import Header from './components/Header';
import FormBox from './components/FormBox'; //No Borrar FormBox
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import ResponsiveSidebar from './components/ResponsiveSidebar';
import GeneralForm from './components/GeneralForm';
import Home from './components/Home';


function App() {
  
  return (
    <Router>
      <div className="App">
        <ResponsiveSidebar
          headerText={'Menú Navegación'}
          footerText={''}
        />
        <Header />
        <Routes>
          <Route path="/GeneralForm" element={<GeneralForm />} />
          <Route path="/Home" element={<Home />} />
          {/* Redirigir de la ruta raíz a /Home */}
          <Route path="/" element={<Navigate replace to="/Home" />} />
          {/* Redirigir de cualquier ruta no definida a /Home */}
          <Route path="*" element={<Navigate replace to="/Home" />} />
          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
