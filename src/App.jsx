import { Link, Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'

function App() {
  return (
    <div>
      <h1>Router Demo</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  )
}

export default App