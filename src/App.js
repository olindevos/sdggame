import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Stats from './pages/Stats'
import About from './pages/About'
import './App.css'
import NoPage from './pages/NoPage'
import React from 'react'; 
import './App.css'; 
import CurrentPOI from './components/CurrentPOI'; 
import ActionBlock from './components/ActionBlock'; 

function App() {
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
    <div className="H11"> 

    <h1>POI Spel</h1> 
         <CurrentPOI />   {/* Laat de POI zien */} 
         <ActionBlock />   {/* acties om spel te stoppen*/} 
    </div> 
    </>
 )
}

export default App;
