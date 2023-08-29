
import './Components/style.css'
import React from "react"

import Firstpage from './Components/Firstpage';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import About from './Components/About';
import Support from './Components/Support';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Firstpage />} />
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Support' element={<Support/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;


