import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import BeatCreation from './pages/BeatCreation'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="beat-creation" element={<BeatCreation />} />

      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
