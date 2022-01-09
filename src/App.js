import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <div id='main' className='main bg-slate-500'>
        CONTENT GOES HERE
      </div>
    </div>
  )
}

export default App
