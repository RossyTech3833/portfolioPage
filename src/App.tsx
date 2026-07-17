
import './App.css'
import {Route,Routes} from 'react-router-dom'
import { Home } from './components/Home'
import { Project } from './components/Project'
import { HireMe } from './components/HireMe'
import { Footer } from './components/Footer'

function App() {
  

  return (
    <>
      
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/Project' element={<Project/>}  />
          <Route path='/HireMe' element={<HireMe/>}  />
        </Routes>
        <Footer/>
      
       
    </>
  )
}

export default App
