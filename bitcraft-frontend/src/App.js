import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import { Footer, Navbar, Home, Products, Login } from './components';
import './stylesheets/app.css'

const App = () => {
  const [pageID, setPageID] = useState(1);
  
  return (
    <>
      <Navbar onPage={pageID} setPageID = {setPageID} />
      <Routes>
        <Route exact path ='/' element={<Home pageID = {1} setPageID = {setPageID} />} />
        <Route exact path ='/products' element={<Products pageID = {2} />} />
        <Route exact path ='/login' element={<Login />} />
      </Routes>
      <Footer onPage={pageID} setPageID = {setPageID} />
    </>
  )
}

export default App