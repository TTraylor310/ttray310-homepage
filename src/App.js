import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import WorkHistory from './pages/WorkHistory'

import './index.css'


const App = () => {
  return (
    <div className='bg-grossTh'>

      <Router>

        <div className='flex items-center justify-between shadow-md bg-deepBlue p-5'>
          <Contact />
          <Header />
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work-history' element={<WorkHistory />} />
        </Routes>

        <div className="min-w-max px-3 pt-3 mb-0 ">
          <Footer />
        </div>

      </Router>

    </div>
  )
}

export default App
