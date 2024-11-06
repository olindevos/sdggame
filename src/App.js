import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Stats from './pages/Stats'
import About from './pages/About'
import './App.css'
import NoPage from './pages/NoPage'
import React from 'react'; 
import './App.css'; 
import Game from './pages/Game'


export default function App() {
    const exampleResults = [
        {
          isCorrect: true,
          userAnswer: 'A',
          correctAnswer: 'A',
          options: ['A', 'B', 'C'], // Opties die horen bij deze vraag
        },
        {
          isCorrect: false,
          userAnswer: 'B',
          correctAnswer: 'A',
          options: ['A', 'B', 'C'],
        },
        {
          isCorrect: true,
          userAnswer: 'A',
          correctAnswer: 'A',
          options: ['A', 'B', 'C'],
        },
        {
            isCorrect: true,
            userAnswer: 'A',
            correctAnswer: 'A',
            options: ['A', 'B', 'C'], // Opties die horen bij deze vraag
          },
          {
            isCorrect: false,
            userAnswer: 'B',
            correctAnswer: 'A',
            options: ['A', 'B', 'C'],
          },
          {
            isCorrect: true,
            userAnswer: 'A',
            correctAnswer: 'A',
            options: ['A', 'B', 'C'],
          },
          {
            isCorrect: true,
            userAnswer: 'A',
            correctAnswer: 'A',
            options: ['A', 'B', 'C'], // Opties die horen bij deze vraag
          },
          {
            isCorrect: false,
            userAnswer: 'B',
            correctAnswer: 'A',
            options: ['A', 'B', 'C'],
          },
          {
            isCorrect: true,
            userAnswer: 'A',
            correctAnswer: 'A',
            options: ['A', 'B', 'C'],
          },
          {
            isCorrect: true,
            userAnswer: 'A',
            correctAnswer: 'A',
            options: ['A', 'B', 'C'], // Opties die horen bij deze vraag
          },
          {
            isCorrect: false,
            userAnswer: 'B',
            correctAnswer: 'A',
            options: ['A', 'B', 'C'],
          },
          {
            isCorrect: true,
            userAnswer: 'A',
            correctAnswer: 'A',
            options: ['A', 'B', 'C'],
          },
        // Voeg meer resultaten toe
      ];
 return(
    <>
    
    <div className='home'>
        <BrowserRouter>
        <Routes>
            <Route index element = {<Home/>}/>
            <Route path='/home' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/stats' element = {<Stats/>}/>
            <Route path='/game' element={<Game results={exampleResults}/>}/>
            <Route path='*' element = {<NoPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
 
    </>
 )
}
;
