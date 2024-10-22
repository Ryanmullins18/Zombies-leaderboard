import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Submission from './components/Submission'
import Sker from './components/Sker'
import SearchPlayer from './components/SearchPlayer'
import Leaderboards from './components/Leaderboards'

function App() {
  
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path= '/' element= {<Home />}/>
        <Route path= '/submit' element= {<Submission />}/>
        <Route path= '/sker' element= {<Sker />}/>
        <Route path= '/search' element= {<SearchPlayer />}/>
        <Route path= '/leaderboards' element= {<Leaderboards />}/>
        
      </Routes>
    </div>
  )
}

export default App
