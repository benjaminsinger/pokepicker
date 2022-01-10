import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { PokemonProvider } from './context/pokemon/PokemonContext'
import About from './pages/About'
import Pokemon from './pages/Pokemon'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <PokemonProvider>
      <Router>
        <div className='overflow-hidden'>
          <Header />
          <main id='main' className='main'>
            <div className=' mx-auto'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/pokemon/:name' element={<Pokemon />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </PokemonProvider>
  )
}

export default App
