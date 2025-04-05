import {Routes,Route} from 'react-router-dom'
import Book from './page/book'
import History from './page/history'
import Register from './page/register'
import Home from './page/home'
import './assets/css/output.css'

function App() {

  return (
  <>
    <Routes>
     <Route path="/" element={<Register/>} />
     <Route path="/book" element={<Book/>} />
     <Route path="/history" element={<History/>} />
     <Route path="/register" element={<Home/>} />
    </Routes>
  </>
  )
}

export default App
