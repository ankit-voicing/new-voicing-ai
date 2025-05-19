import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VoicingAIDashboard from './pages/homepage'
import VoicePage from './pages/voice'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VoicingAIDashboard />} />
        <Route path="/voice" element={<VoicePage />} />
      </Routes>
    </Router>
  )
}

export default App
