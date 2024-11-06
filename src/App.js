import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Stats from './pages/Stats'
import About from './pages/About'
import './App.css'
import NoPage from './pages/NoPage'
import React from 'react'; 
import './App.css'; 


export default function App() {
 return(
    <>
    <div className='home'>
        <BrowserRouter>
        <Routes>
            <Route index element = {<Home/>}/>
            <Route path='/home' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/stats' element = {<Stats/>}/>
            <Route path='*' element = {<NoPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
 
    </>
 )
}
;
