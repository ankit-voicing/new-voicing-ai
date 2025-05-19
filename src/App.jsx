
import { Route, Routes } from 'react-router-dom'
import './App.css'

import VoicingAIDashboard from './pages/homepage'
import AiAssistant from './pages/aiAssistant'
import Layout from './components/common/Layout'
import CreateAssistantModal from './pages/test'
import AssistantCreationUI from './pages/test2'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/dashboard' element={<VoicingAIDashboard />} />
          <Route path='/ai-assistant' element={<AiAssistant />} />
          <Route path='/test' element={<CreateAssistantModal />} />
          <Route path='/test2' element={<AssistantCreationUI />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
