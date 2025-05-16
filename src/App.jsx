
import './App.css'
import Header from './components/common/Header'
import Sidebar from './components/common/Sidebar'
import VoicingAIDashboard from './pages/homepage'
import AiAssistant from './pages/homepage/aiAssistant'

function App() {

  return (
    <>
      <div className='min-h-screen'>
        <Header />
        <div className="flex bg-slate-50 text-gray-800">
          <Sidebar />
          <div className='ml-20'>
            <VoicingAIDashboard />
            <AiAssistant />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
