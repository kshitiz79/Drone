// App.jsx
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
// Import other page components as needed, e.g., About, Contact, etc.
// import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>
  )
}

export default App
