import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './css/style_index.css'
import HomePage from './HomePage'
import Contact from './ContactPage'
import Projects from './ProjectPage'
import NavBar from './component/navbar'
import Footer from './component/Footer'

function App() {
    return (
        <>
        <NavBar/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<h1>error 404</h1>}/>
        </Routes>
        <Footer/>
        </>
    );
}

export default App;