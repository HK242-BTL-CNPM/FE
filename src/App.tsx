import {Routes,Route} from 'react-router-dom'
import Book from './page/book'
import History from './page/history'
import Register from './page/register'
import Home from './page/home'
import Login from './page/login'
import './assets/css/output.css'

function App() {

  return (
  <>
    <Routes>
     <Route path="/" element={<Register/>} />
     <Route path="/book" element={<Book/>} />
     <Route path="/history" element={<History/>} />
     <Route path="/register" element={<Home/>} />
     <Route path="/login" element={<Login/>} />
    </Routes>
  </>
  )
}

export default App
