import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import WorkHistory from './pages/WorkHistory'

import './index.css'


const App = () => {
  return (
    <div className='bg-violet-200'>

      <h1 className='text-4xl'>Homepage</h1>

      <Router>

        <div className='flex'>
          <Contact />
          <Header />
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work-history' element={<WorkHistory />} />
        </Routes>

        <div className="flex">
          <Footer />
        </div>

      </Router>

    </div>
  )
}

export default App
