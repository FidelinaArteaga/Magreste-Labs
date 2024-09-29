import { useState } from 'react';
import { magretelabs2_backend } from 'declarations/magretelabs2_backend';
import"./App.css"
import Nabvar from './Navbar';
import servicios from "./servicos";


const App = () => {


  return (

    

    <div className= "App">

    <Navbar></Navbar>
    <servicios></servicios>
   

    </div>
  
   
     
      
    
  );
}

export default App;
