
import { Route, Routes } from 'react-router-dom'
import './App.css'

import VoicingAIDashboard from './pages/homepage'
import AiAssistant from './pages/aiAssistant'
import Layout from './components/common/Layout'
import CreateAssistantModal from './pages/test'
import CreateAssistant from './pages/create-assistant'
import VoicingAIVoiceScreen from './pages/test2'
import VoicingAIAnalytics from './pages/ananytics'
import VoicingAICallLogs from './pages/call-logs'
import VoicePage from './pages/voice'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/dashboard' element={<VoicingAIDashboard />} />
          <Route path='/ai-assistant' element={<AiAssistant />} />
          <Route path='/test' element={<CreateAssistantModal />} />
          <Route path='/create-assistant' element={<CreateAssistant />} />
          <Route path='/test2' element={<VoicingAIVoiceScreen />} />
          <Route path='/analytics' element={<VoicingAIAnalytics />} />
          <Route path='/call-logs' element={<VoicingAICallLogs />} />
          <Route path="/voice" element={<VoicePage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
