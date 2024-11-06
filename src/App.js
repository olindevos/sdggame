import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About'
import './App.css';
import NoPage from './pages/NoPage';
import FirstPage from './pages/FirstPage';

function App() {
 return(
    <div className='home'>
        <BrowserRouter>
        <Routes>
            <Route index element = {<Home/>}/>
            <Route path='/home' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/contact' element = {<Contact/>}/>
            <Route path="/firstpage" element={<FirstPage />} />
            <Route path='*' element = {<NoPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
 )
}

export default App;
