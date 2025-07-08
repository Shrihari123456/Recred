import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Homepage from './pages/Homepage'
import RewardsPage from './pages/rewards'
import LeaderboardPage from './pages/leaderboard'
// import Footer from './components/footer'
import Signup from './pages/signup'
const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <Router>
      <div className="App">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}


export default App
