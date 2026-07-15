
import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Project } from './components/Project'
import { HireMe } from './components/HireMe'
import { Footer } from './components/Footer'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/About' element={<About/>}  />
          <Route path='/Project' element={<Project/>}  />
          <Route path='/HireMe' element={<HireMe/>}  />
        </Routes>
        <Footer/>
      </Router>
       
    </>
  )
}

export default App
