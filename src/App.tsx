import {Routes,Route} from 'react-router-dom'
import Book from './page/book'
import History from './page/history'
import Register from './page/register'
import Home from './page/home'
import Login from './page/login'
import Profile from './page/profile'
import './assets/css/output.css'

function App() {

  return (
  <>
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/book" element={<Book/>} />
     <Route path="/history" element={<History/>} />
     <Route path="/register" element={<Register/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/profile" element={<Profile/>} />
    </Routes>
  </>
  )
}

export default App
