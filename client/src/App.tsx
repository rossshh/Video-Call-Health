import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Join from './Join'
import Room from './Room'
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Provider Landing Page */}
          <Route path="/" element={<Home />} />
          
          {/* Patient Join Page (Link Shared by Provider) */}
          <Route path="/join" element={<Join />} />
          
          {/* Main Video Room */}
          <Route path="/room/:roomName" element={<Room />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
