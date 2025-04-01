import {Routes,Route} from 'react-router-dom'
import Home from './page/home'
import Book from './page/book'
import History from './page/history'

function App() {

  return (
  <>
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/book" element={<Book/>} />
     <Route path="/history" element={<History/>} />
    </Routes>
  </>
  )
}

export default App
