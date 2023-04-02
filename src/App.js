import React from 'react'
import { BrowserRouter , Route, Routes } from "react-router-dom"
// import { Card, makeStyles } from "@material-ui/core"
import Cards from './pages/Cards';
import Header from './components/Header';
import Cardsummary from './pages/Cardsummary';



function App() {
  
  return (
    <BrowserRouter>

    <div >
      <Header />
      
      <Routes>
        <Route path="/"  element={<Cards/>} />
        <Route path="/Cardsummary/:id"  element={<Cardsummary/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;


