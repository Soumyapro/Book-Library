import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import BookLists from './pages/BookLists'
import AddBooks from './pages/AddBooks';
import About from './pages/About';
import Contacts from './pages/Contacts';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/BookLists" element={<BookLists />}></Route>
          <Route path="/AddBooks" element={<AddBooks />}></Route>
          <Route path="/BookLists/AddBooks" element={<AddBooks />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/BookLists/About" element={<About />}></Route>
          <Route path="/AddBooks/About" element={<About />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
          <Route path="/BookLists/Contacts" element={<Contacts />}></Route>
          <Route path="/AddBooks/Contacts" element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App