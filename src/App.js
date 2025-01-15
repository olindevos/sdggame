import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Stats from './pages/Stats'
import About from './pages/About'
import './App.css'
import NoPage from './pages/NoPage'
import React from 'react'; 
import './App.css'; 
import Game from './pages/Game'
import FirstPage from './pages/FirstPage'
import NextPage from './pages/NextPage';
import LoopPage from './pages/LoopPage';
import ThirdPage from './pages/ThirdPage'
import DupePage from './pages/DupePage'
import LastPage from './pages/LastPage'
import CreateJoin from './pages/CreateJoin'
import Create from './pages/create'
import Join from './pages/join'
import GPSGame from './components/GPSGame'
import TestLocation from './pages/TestLocation';
import Olintest from './pages/Olintest'

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
            <Route path="/firstpage" element={<FirstPage />} />
            <Route path="/nextpage" element={<NextPage />} />
            <Route path="/loop" element={<LoopPage />} />
            <Route path="/thirdpage" element={<ThirdPage />} />
            <Route path="/dupe" element={<DupePage />} />
            <Route path="/lastpage" element={<LastPage />} />
            <Route path='*' element = {<NoPage/>}/>
            <Route path="/createjoin" element = {<CreateJoin/>} />
            <Route path="/create" element = {<Create/>} />
            <Route path="/join" element = {<Join/>} />
            <Route path="/gpsgame" element={<GPSGame />} />
            <Route path="/testlocation" element={<TestLocation />} />
            <Route path="/olintest" element={< Olintest/>} />


        </Routes>
        </BrowserRouter>
    </div>
 
    </>
 )
}
;
