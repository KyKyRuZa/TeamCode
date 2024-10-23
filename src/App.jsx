import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Singup'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teamcode/" element={<Home/>}></Route>
        <Route path="teamcode/register" element={<Register/>}></Route>
        <Route path="teamcode/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
