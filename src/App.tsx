import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
