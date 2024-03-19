import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App